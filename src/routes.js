import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Manager from "./manager/pages/Manager";
import Report from "./manager/pages/report/ListReports";
import AddRoom from "./manager/pages/room/AddRoom";
import ListRoom from "./manager/pages/room/ListRoom";
import Room from "./manager/pages/room/Room";

import CheckError from "./CheckError";
import VerificationSuccess from "./public/pages/auth/Verification";
import ERROR from "./public/pages/Error/404";
import ForgetPassword from "./public/pages/Error/forgetPassword";
import ERROR1 from "./public/pages/Error/noPermission";

import Login from "./public/pages/auth/Login";
import ResetPasswordIdentify from "./public/pages/auth/ResetPassword";
import Signup from "./public/pages/auth/SignUp";

import Health from "./user/pages/Health";
import Information from "./user/pages/information";
import MedicalHistory from "./user/pages/MedicalHistory";
import MedicalRegister from "./user/pages/MedicalRegister";

import ResetPassword from "./user/pages/ResetPassword";
import User from "./user/pages/User";

import Assistant from "./assistant/pages/assistant";

import AuthenticationRoutes from "./redux/auth/authentication";
// login => list of books

const AppRouter = () => (
  <Router>
    <Routes>
      {/* <Route path="/"> */}
      <Route path="Login" element={<Login />} />
      <Route path="CheckError" element={<CheckError />} />

      <Route path="identify" element={<ForgetPassword />} />
      <Route path="verification" element={<VerificationSuccess />} />

      <Route path="ResetPasswordIdentify" element={<ResetPasswordIdentify />} />
      <Route element={<AuthenticationRoutes />}>
        <Route path="User" element={<User />}>
          <Route path="information" element={<Information />} />
          <Route path="Health" element={<Health />} />
          <Route path="MedicalHistory" element={<MedicalHistory />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="MedicalRegister" element={<MedicalRegister />} />
        </Route>
        <Route path="Assistant" element={<Assistant />}></Route>

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
