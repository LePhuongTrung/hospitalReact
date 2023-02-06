import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-2/12 bg-gray-800 text-white absolute  py-4 h-screen">
      <nav>
        <NavLink
          to="/staff/information"
          className="block py-2 pl-4 text-gray-400 hover:text-white font-medium h-1/2 w-full text-center"
          activeClassName="text-white bg-gray-600"
        >
          About
        </NavLink>
        <NavLink
          to="/staff/Work"
          className="block py-2 pl-4 text-gray-400 hover:text-white font-medium h-1/2 w-full text-center"
          activeClassName="text-white bg-gray-600"
        >
          Work
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
