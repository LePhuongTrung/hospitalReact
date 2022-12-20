import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Manager from "./manager/pages/Manager";
import Report from "./manager/pages/report/ListReports";
import AddRoom from "./manager/pages/room/AddRoom";
import ListRoom from "./manager/pages/room/ListRoom";
import Room from "./manager/pages/room/Room";

import VerificationSuccess from "./public/pages/auth/Verification";
import ERROR from "./public/pages/Error/404";
import ForgetPassword from "./public/pages/Error/forgetPassword";
import ERROR1 from "./public/pages/Error/noPermission";

import Login from "./public/pages/auth/Login";
import ResetPassword from "./public/pages/auth/ResetPassword";
import Signup from "./public/pages/auth/SignUp";

import User from "./user/pages/User";

import AuthenticationRoutes from "./middleware/authentication";
// login => list of books

const AppRouter = () => (
  <Router>
    <Routes>
      {/* <Route path="/"> */}
      <Route path="Login" element={<Login />} />

      <Route path="forgetPassword" element={<ForgetPassword />} />
      <Route path="verification" element={<VerificationSuccess />} />

      <Route path="resetPassword" element={<ResetPassword />} />
      <Route element={<AuthenticationRoutes />}>
        <Route path="user" element={<User />}></Route>
        <Route path="Manager" element={<Manager />}>
          <Route path="Room" element={<Room />}>
            <Route path="AddRoom" element={<AddRoom />} />
            <Route path="ListRoom" element={<ListRoom />} />
          </Route>
          <Route path="Report" element={<Report />}></Route>
        </Route>
      </Route>
      <Route path="SignUp" element={<Signup />} />

      <Route path="ERROR" element={<ERROR />} />
      <Route path="NoPermission" element={<ERROR1 />} />

      {/* <Route path="/products" element={<ListProduct />} /> */}
      {/* </Route> */}
    </Routes>
  </Router>
);

export default AppRouter;
