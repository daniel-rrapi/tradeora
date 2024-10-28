import {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../auth/AuthProvider";
import plusSvg from "../assets/svg/plus.svg"

export default function Navbar() {
  const {user, logout} = useContext(AuthContext);
  const authButtons = user ? (
    <>
      <Link className="font-bold" to="/profile">
        Profile
      </Link>
      <button onClick={() => logout()}>Logout</button>
    </>
  ) : (
    <>
      <Link className="font-bold" to="/login">
        Login
      </Link>
      <Link to="/signup">Signup</Link>
    </>
  );

  return (
    <nav className="container mx-auto md:w-2/3 flex justify-between border-y-2 border-gray-200 my-8 py-2 px-2 sm:px-0">
      <Link to="/">
        <img className="h-14" src="/full-logo.png" alt="tradeora logo"/>
      </Link>
      <div className="my-auto inline-flex items-center gap-5 text-slate-700">
        {authButtons}
        <Link className="btn btn-secondary inline-flex items-center gap-x-1	" to="/insert-item">
          <img src={plusSvg} alt="add"/>
          Sell
        </Link>
      </div>
    </nav>
  );
}
