import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-red-400 underline text-sm"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-400 underline   text-sm"
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-red-400 underline  text-sm"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
    </>
  );
  return (
    <div>
      <div className="navbar px-6 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg "
            >
             {navLinks}
              
            </ul>
          </div>
          <img src="assets/logo.png" alt="" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-5">
            {navLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
