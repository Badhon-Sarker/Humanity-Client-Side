import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);

  const links = (
    <div className="flex flex-col lg:flex-row justify-evenly gap-3 font-semibold text-md">
      <NavLink className={({isActive})=> isActive? 'text-green-500 lg:text-black lg:border-b-2 border-green-500' : ''} to={"/"}>Home</NavLink>

      <NavLink className={({isActive})=> isActive? 'text-green-500 lg:text-black lg:border-b-2 border-green-500' : ''} to={"/needVolunteer"}>Need Volunteer</NavLink>

      <NavLink className={({isActive})=> isActive? 'text-green-500 lg:text-black lg:border-b-2 border-green-500' : ''} to={"/addVolunteer"}>Add Volunteer</NavLink>
    </div>
  );

  const handleLogout = () => {
    Logout()
      .then((result) => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 font-playfair">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <NavLink to={"/"}>
            <p className="text-xl font-bold">Humanity</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end z-50">
          <div className="flex gap-1">
            {user ? (
              <div className="flex justify-between gap-2 items-center">
               
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <a id="my-anchor-element-id">
                          <img alt="PhotoURL" src={user?.photoURL} />
                        </a>
                        <Tooltip
                          // Don't forget the `#`!
                          anchorSelect="#my-anchor-element-id"
                          content={user.displayName}
                          place={"left"}
                        />
                      </div>             
                </div>

                <button className="btn" onClick={handleLogout}>
                  LogOut
                </button>
              </div>
            ) : (
              <>
                <NavLink to={"/login"} className="btn">
                  Log In
                </NavLink>
                <NavLink to={"/register"} className="btn">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
