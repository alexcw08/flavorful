import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="navbar justify-between  bg-slate-700">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/recipes">Recipes</Link>
            </li>
            <li>
              <a>Nutrition</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        {/* <a className="btn btn-ghost text-xl">Flavorful</a> */}
        <Link to="/" className="btn btn-ghost text-xl">
          Flavorful
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost">Sign out</button>
      </div>
    </header>
  );
};
