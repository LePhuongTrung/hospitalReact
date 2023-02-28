import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Manager from "./manager/pages/Manager";
import Report from "./manager/pages/report/ListReports";
import AddRoom from "./manager/pages/room/AddRoom";
import ListRoom from "./manager/pages/room/ListRoom";
import Room from "./manager/pages/room/Room";
import AddSick from "./manager/pages/sick/AddSick";
import ListSick from "./manager/pages/sick/ListSick";
import Sick from "./manager/pages/sick/Sick";
import {
  default as UploadRoom,
  default as UploadSick,
} from "./manager/pages/sick/UploadSick";
import AddStaff from "./manager/pages/Staff/AddStaff";
import ListStaff from "./manager/pages/Staff/ListStaff";
import StaffManager from "./manager/pages/Staff/Staff";
import StaffAccount from "./manager/pages/Staff/StaffAccount";

import AddSale from "./manager/pages/Sales/AddSales";
import Sale from "./manager/pages/Sales/Sales";
import Week from "./manager/pages/Sales/Week";

import CheckError from "./CheckError";
import VerificationSuccess from "./public/pages/auth/Verification";
import ERROR from "./public/pages/Error/404";
import ForgetPassword from "./public/pages/Error/forgetPassword";
import ERROR1 from "./public/pages/Error/noPermission";
import SERVERERROR from "./public/pages/Error/ServerNotWorking";

import Login from "./public/pages/auth/Login";
import ResetPasswordIdentify from "./public/pages/auth/ResetPassword";
import Signup from "./public/pages/auth/SignUp";

import Create from "./user/pages/Create";
import Edit from "./user/pages/Edit";
import Health from "./user/pages/Health";
import Information from "./user/pages/information";
import MedicalHistory from "./user/pages/MedicalHistory";
import MedicalRegister from "./user/pages/MedicalRegister";

import ResetPassword from "./user/pages/ResetPassword";
import User from "./user/pages/User";

import Doctor from "./doctor/doctor";
import Diagnosis from "./doctor/pages/DoctorLearn";

import Profile from "./staff/pages/profile";
import Staff from "./staff/pages/staff";

import AuthenticationRoutes from "./redux/auth/authentication";
// login => list of books

const AppRouter = () => (
  <Router>
    <Routes>
      <Route index element={<Login />} />
      <Route path="Login" element={<Login />} />
      <Route path="CheckError" element={<CheckError />} />
      <Route path="identify" element={<ForgetPassword />} />
      <Route path="verification" element={<VerificationSuccess />} />
      <Route path="ResetPasswordIdentify" element={<ResetPasswordIdentify />} />
      <Route path="Doctor" element={<Doctor />}>
        <Route index element={<Diagnosis />} />
        <Route path="Diagnosis" element={<Diagnosis />} />
      </Route>
      <Route path="Staff" element={<Staff />}>
        <Route index element={<Profile />} />
        <Route path="Profile" element={<Profile />} />
      </Route>
      <Route element={<AuthenticationRoutes />}>
        <Route path="User" element={<User />}>
          <Route index element={<Information />} />
          <Route path="information" element={<Information />} />
          <Route path="Create" element={<Create />} />
          <Route path="Edit" element={<Edit />} />
          <Route path="Health" element={<Health />} />
          <Route path="MedicalHistory" element={<MedicalHistory />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="MedicalRegister" element={<MedicalRegister />} />
        </Route>
        <Route path="Manager" element={<Manager />}>
          <Route index element={<Sick />} />
          <Route path="Sick" element={<Sick />}>
            <Route index element={<ListSick />} />
            <Route path="AddSick" element={<AddSick />} />
            <Route path="ListSick" element={<ListSick />} />
            <Route path="UploadSick" element={<UploadSick />} />
          </Route>
          <Route path="Room" element={<Room />}>
            <Route index element={<ListRoom />} />
            <Route path="AddRoom" element={<AddRoom />} />
            <Route path="ListRoom" element={<ListRoom />} />
            <Route path="UploadRoom" element={<UploadRoom />} />
          </Route>
          <Route path="Sale" element={<Sale />}>
            <Route index element={<Week />} />
            <Route path="AddSale" element={<AddSale />} />
            <Route path="Week" element={<Week />} />
          </Route>
          <Route path="StaffManager" element={<StaffManager />}>
            <Route index element={<ListStaff />} />
            <Route path="AddStaff" element={<AddStaff />} />
            <Route path="ListStaff" element={<ListStaff />} />
            <Route path="StaffAccount" element={<StaffAccount />} />
          </Route>
          <Route path="Report" element={<Report />} />
        </Route>
      </Route>

      <Route path="SignUp" element={<Signup />} />
      <Route path="SERVERERROR" element={<SERVERERROR />} />
      <Route path="ERROR" element={<ERROR />} />
      <Route path="NoPermission" element={<ERROR1 />} />
      {/* <Route errorElement element={ERROR} /> */}
    </Routes>
  </Router>
);

export default AppRouter;
