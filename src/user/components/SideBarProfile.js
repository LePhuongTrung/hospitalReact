import {
  UilClipboardAlt,
  UilHeartMedical,
  UilKeySkeletonAlt,
  UilSignout,
} from "@iconscout/react-unicons";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logOut } from "../../redux/auth/AuthStatus";
export default function SideBarProfile() {
  const dispatch = useDispatch();

  const LogOut = () => {
    try {
      localStorage.removeItem("user");
      dispatch(logOut());
      Navigate("/login", { replace: true });
    } catch (err) {}
  };

  return (
    <div class=" w-64 px-4">
      <div class="px-2 pt-4 pb-8 border-r border-gray-300">
        <ul class="space-y-4 h-555">
          <li>
            <a
              href="/user/information"
              class="bg-gray-500 bg-opacity-30 text-blue-500 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer"
            >
              <span class="flex items-center space-x-2">
                <CgProfile
                  class="h-5 w-5"
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
            </a>
          </li>

          <li>
            <a
              href="/user/ResetPassword"
              class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
            >
              <UilKeySkeletonAlt
                class="h-5 w-5"
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
            </a>
          </li>
          <li>
            <a
              href="/user/Health"
              class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
            >
              <UilHeartMedical
                class="h-5 w-5"
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
            </a>
          </li>
          <li>
            <a
              href="/user/MedicalHistory"
              class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
            >
              <UilClipboardAlt
                class="h-5 w-5"
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
            </a>
          </li>
          <li>
            <a
              href="/user/MedicalRegister"
              class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
            >
              <UilClipboardAlt
                class="h-5 w-5"
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
            </a>
          </li>
          <li>
            <div
              onClick={LogOut}
              class="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-500 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer"
            >
              <UilSignout
                class="h-5 w-5 slate-900"
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
      </div>
    </div>
  );
}
