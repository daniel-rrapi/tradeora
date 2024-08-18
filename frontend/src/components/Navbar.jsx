import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="container mx-auto md:w-2/3 flex justify-between border-y-2 border-gray-200 my-8 py-2">
      <Link>
        <img className="h-14" src="/full-logo.png" alt="tradeora logo" />
      </Link>
      <div className="my-auto inline-flex items-center gap-5 text-slate-700">
        <Link className="font-bold">Login</Link>
        <Link>Signup</Link>
        <Link className="btn btn-secondary inline-flex items-center gap-x-1	">
          <svg
            className="fill-primary"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8zm0-2h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm5 8h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 2 0v3z"></path>
          </svg>
          Sell
        </Link>
      </div>
    </nav>
  );
}
