import {
  UilClipboardAlt,
  UilHeartMedical,
  UilKeySkeletonAlt,
  UilSignout,
} from "@iconscout/react-unicons";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/auth/AuthStatus";

export default function SideBarProfile() {
  const dispatch = useDispatch();

  const LogOut = () => {
    try {
      localStorage.removeItem("user");
      dispatch(logOut());
    } catch (err) {
      console.error("🚀 ~ file: SideBarProfile.js:22 ~ LogOut ~ err:", err);
    }
  };

  const game = () => {
    window
      .open("https://angular-game.vercel.app/home", "_blank")
      ?.location.assign("https://angular-game.vercel.app/home");
  };
  return (
    <aside className=" w-72 px-4">
      <nav className="px-2 pt-4 pb-8 border-r border-gray-300">
        <ul className="space-y-4 h-555">
          <li>
            <NavLink
              to="/user/information"
              className="block py-2 pl-4 text-gray-900 hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 font-normal h-1/2"
            >
              <span className="flex items-center space-x-2">
                <CgProfile
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </CgProfile>
                <span>Profile</span>
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/user/ResetPassword"
              className="block py-2 pl-4 text-gray-900 hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 font-normal h-1/2 flex"
            >
              <UilKeySkeletonAlt
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </UilKeySkeletonAlt>
              <span>Reset Password</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/Health"
              className="block py-2 pl-4 text-gray-900 hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 font-normal h-1/2 flex"
            >
              <UilHeartMedical
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                ></path>
              </UilHeartMedical>
              <span>Health</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/MedicalHistory"
              className="block py-2 pl-4 text-gray-900 hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 font-normal h-1/2 flex"
            >
              <UilClipboardAlt
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </UilClipboardAlt>
              <span>Medical History</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/MedicalRegister"
              className="block py-2 pl-4 text-gray-900 hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 font-normal h-1/2 flex"
            >
              <UilClipboardAlt
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </UilClipboardAlt>
              <span>Medical register</span>
            </NavLink>
          </li>
          <li
            className="flex space-x-2 pl-4 hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500"
            onClick={game}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="game"
            >
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="#200E32"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                transform="translate(2 2)"
              >
                <line x1="6.848" x2="6.848" y1="10.314" y2="14.059"></line>
                <line x1="8.759" x2="4.938" y1="12.187" y2="12.187"></line>
                <line x1="13.366" x2="13.259" y1="10.428" y2="10.428"></line>
                <line x1="15.18" x2="15.073" y1="14.003" y2="14.003"></line>
                <path d="M6.07216276 5.32907052e-15L6.07216276 5.32907052e-15C6.07216276.740482877 6.68464554 1.34076212 7.44018226 1.34076212L8.49666207 1.34076212C9.66228674 1.34491631 10.6064427 2.27026027 10.611741 3.41266022L10.611741 4.08771473M14.4283141 19.9626083C11.4231218 20.013497 8.47303168 20.0114199 5.57274558 19.9626083 2.35350217 19.9626083 0 17.6663844 0 14.5112835L0 9.86171565C0 6.70661469 2.35350217 4.41039079 5.57274558 4.41039079 8.48892657 4.36054061 11.441136 4.36157916 14.4283141 4.41039079 17.6475575 4.41039079 20 6.70765324 20 9.86171565L20 14.5112835C20 17.6663844 17.6475575 19.9626083 14.4283141 19.9626083z"></path>
              </g>
            </svg>
            <span>Play Game</span>
          </li>
          <li>
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
}
