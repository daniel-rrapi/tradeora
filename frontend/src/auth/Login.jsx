import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

export default function Login() {
  const { login, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(email, password);
    if (user) {
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <h3 className="">LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button className="btn btn-primary" type="submit">
          Sign in
        </button>
        <p>
          You dont&apos;t have an account? <Link>Sign up</Link>
        </p>
      </form>
    </>
  );
}
