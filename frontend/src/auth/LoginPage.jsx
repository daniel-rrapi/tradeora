import {Link, useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthProvider";

export default function LoginPage() {
  const {login, user} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="container mx-auto w-1/4 h-screen flex justify-center">
        <div className="my-auto w-full">
          <Link to="/" className=" block">
            <img className="h-14 text-center block mx-auto" src="/full-logo.png" alt="tradeora logo"/>
          </Link>
          <h4 className="text-center font-bold text-2xl">Sign in to your account</h4>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="E.g. johndoe@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="mb-5"
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="mb-5"
            />
            <button className="btn btn-primary mb-1" type="submit">
              Sign in
            </button>
            <p className="text-red-700 font-bold my-3">{error}</p>
            <p className="text-slate-700 text-center">
              You dont&apos;t have an account?{" "}
              <Link className="font-bold text-primary" to="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
