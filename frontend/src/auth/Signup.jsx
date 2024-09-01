import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [dob, setDob] = useState("");
  const [mailingList, setMailingList] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { register } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(
        firstName,
        lastName,
        email,
        password,
        dob,
        mailingList,
        phoneNumber
      );
    } catch (err) {
      console.log(err);

      setError(err.response.data);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-sm mb-5 ">
        <h3 className="text-center font-bold text-4xl	">Signup</h3>
        <p className="text-center my-5">Hi, welcome aboard!</p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <p className="text-red-700 font-bold mb-5">{error.firstName}</p>

          <label htmlFor="">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <p className="text-red-700 font-bold mb-5">{error.lastName}</p>

          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="E.g. johndoe@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <p className="text-red-700 font-bold mb-5">{error.email}</p>

          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <p className="text-red-700 font-bold mb-5">{error.password}</p>

          <label htmlFor="">Confirm your password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            value={passwordConfirm}
          />
          <p className="text-red-700 font-bold mb-5">{error.password}</p>

          <label htmlFor="">Date of Birthday</label>
          <input
            type="date"
            placeholder="E.g. johndoe@email.com"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
          />
          <p className="text-red-700 font-bold mb-5">{error.dob}</p>

          <label htmlFor="">Phone number</label>
          <input
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
          <p className="text-red-700 font-bold mb-5">{error.phoneNumber}</p>

          <div>
            {" "}
            <input
              type="checkbox"
              id="mailingList"
              onChange={(e) => setMailingList(e.target.checked)}
              checked={mailingList}
              className="mb-5 me-4"
            />
            <label htmlFor="mailingList">
              I want to receive updates and news via email
            </label>
          </div>
          <button className="btn btn-primary mb-1" type="submit">
            Sign up
          </button>
          <p className="text-slate-700">
            Do you have already an account?{" "}
            <Link className="underline font-bold text-primary" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
