import { UilSignout } from "@iconscout/react-unicons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut, selectCurrentRole } from "../../redux/auth/AuthStatus";

const Sidebar = () => {
  const dispatch = useDispatch();
  const role = useSelector(selectCurrentRole);

  const link = () => {
    if (role === "assistant") {
      return "/staff/Work";
    } else {
      return "/staff/Diagnosis";
    }
  };

  const LogOut = () => {
    try {
      localStorage.removeItem("user");
      dispatch(logOut());
    } catch (err) {
      console.error("🚀 ~ file: sideBar.js:12 ~ LogOut ~ err:", err);
    }
  };
  return (
    <aside className=" w-full px-4">
      <nav className="px-2 w-full h-full ">
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/staff/Profile"
              className="block mt-4 py-2 text-gray-400 hover:text-black  font-medium h-1/2 w-full text-center"
              activeClassName="selected text-black bg-gray-600"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={link}
              className="block py-2 text-gray-400 hover:text-black  font-medium h-1/2 w-full text-center"
              activeClassName="selected text-black bg-gray-600"
            >
              Work
            </NavLink>
          </li>
          <li className="flex justify-center">
            <div
              onClick={LogOut}
              className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
            >
              <UilSignout
                className="h-5 w-5 slate-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </UilSignout>
              <span>Log out</span>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
