import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, Logout } = useContext(AuthContext);

  const links = (
    <div className="flex flex-col lg:flex-row justify-evenly gap-3 font-semibold text-md">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-green-500 lg:text-black lg:border-b-2 border-green-500"
            : ""
        }
        to={"/"}
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-green-500 lg:text-black lg:border-b-2 border-green-500"
            : ""
        }
        to={"/needVolunteer"}
      >
        Need Volunteer
      </NavLink>


      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-green-500 lg:text-black lg:border-b-2 border-green-500"
            : ""
        }
        to={'/myVolunteerReq'}
      >
        My Volunteer Request
      </NavLink>


      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-green-500 lg:text-black lg:border-b-2 border-green-500"
            : ""
        }
        to={'/feedback'}
      >
        Feedback
      </NavLink>
      
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
                  {/* start */}

                  <details className="dropdown">
                    <summary className="btn btn-ghost btn-circle">
                      <div className="w-10 rounded-full">
                        <a id="my-anchor-element-id">
                          <img
                            className=" rounded-full"
                            alt="PhotoURL"
                            src={user?.photoURL}
                          />
                        </a>

                        <Tooltip
                          // Don't forget the `#`!
                          anchorSelect="#my-anchor-element-id"
                          content={user.displayName}
                          place={"left"}
                        />
                      </div>
                    </summary>

                    <div className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-42">
                      <ul>
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "text-green-500 "
                              : ""
                          }
                          to={"/addVolunteer"}
                        >
                          <li>Add Volunteer</li>
                        </NavLink>

                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "text-green-500"
                              : ""
                          }
                          to={"/myPost"}
                        >
                          <li> Manage My Post</li>
                        </NavLink>
                      </ul>
                    </div>
                  </details>

                  {/* end */}
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

          <div className="pl-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="dark"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
