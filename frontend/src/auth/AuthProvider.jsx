import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      axios
        .get(`${apiUrl}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((err) => {
          console.error("Token not valid", err);
          localStorage.removeItem("authToken");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });
      const token = response.data;
      localStorage.setItem("authToken", token);
      const userResponse = await axios.get(`${apiUrl}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(userResponse.data);
    } catch (error) {
      console.error("Error during the login", error);
      throw error;
    }
  };

  const register = async (
    firstName,
    lastName,
    email,
    password,
    dob,
    mailingList,
    phoneNumber
  ) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        firstName,
        lastName,
        email,
        password,
        dob,
        mailingList,
        phoneNumber,
      });
      return response;
    } catch (error) {
      console.error("Error during the login", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, register }}>
      {children}
    </AuthContext.Provider>
  );
};
