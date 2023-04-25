import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Manager from "./manager/pages/Manager";
import Report from "./manager/pages/report/ListReports";

import AddRoom from "./manager/pages/room/AddRoom";
import ListRoom from "./manager/pages/room/ListRoom";
import Room from "./manager/pages/room/Room";
import UploadRoom from "./manager/pages/room/UploadRoom";

import AddSick from "./manager/pages/sick/AddSick";
import ListSick from "./manager/pages/sick/ListSick";
import Sick from "./manager/pages/sick/Sick";
import UploadSick from "./manager/pages/sick/UploadSick";

import AddStaff from "./manager/pages/Staff/AddStaff";
import ListStaff from "./manager/pages/Staff/ListStaff";
import StaffManager from "./manager/pages/Staff/Staff";
import StaffAccount from "./manager/pages/Staff/StaffAccount";

import AddDevice from "./manager/pages/device/AddDevice";
import DeviceManager from "./manager/pages/device/Device";
import ListDevice from "./manager/pages/device/ListDevice";
import UploadDevice from "./manager/pages/device/UploadDevice";

import CheckError from "./CheckError";
import VerificationSuccess from "./public/pages/auth/Verification";
import ERROR from "./public/pages/Error/404";
import ForgetPassword from "./public/pages/Error/forgetPassword";
import ERROR1 from "./public/pages/Error/noPermission";
import SERVERERROR from "./public/pages/Error/ServerNotWorking";

import Login from "./public/pages/auth/Login";
import ResetPasswordIdentify from "./public/pages/auth/ResetPassword";
import Signup from "./public/pages/auth/SignUp";

import Edit from "./user/pages/Edit";
import Health from "./user/pages/Health";
import Information from "./user/pages/information";
import MedicalHistory from "./user/pages/MedicalHistory";
import MedicalRegister from "./user/pages/MedicalRegister";
import ResetPassword from "./user/pages/ResetPassword";

import User from "./user/pages/User";

import Diagnosis from "./staff/pages/DoctorLearn";

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
      <Route element={<AuthenticationRoutes />}>
        <Route path="Staff" element={<Staff />}>
          <Route index element={<Profile />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Diagnosis" element={<Diagnosis />} />
        </Route>
        <Route path="User" element={<User />}>
          <Route index element={<Information />} />
          <Route path="information" element={<Information />} />
          <Route path="Edit" element={<Edit />} />
          <Route path="Health" element={<Health />} />
          <Route path="MedicalHistory" element={<MedicalHistory />} />
          <Route path="ResetPassword" element={<ResetPassword />} />
          <Route path="MedicalRegister" element={<MedicalRegister />} />
        </Route>
        <Route path="Manager" element={<Manager />}>
          <Route index element={<Room />} />
          <Route path="Room" element={<Room />}>
            <Route index element={<ListRoom />} />
            <Route path="AddRoom" element={<AddRoom />} />
            <Route path="ListRoom" element={<ListRoom />} />
            <Route path="UploadRoom" element={<UploadRoom />} />
          </Route>
          <Route path="Sick" element={<Sick />}>
            <Route index element={<ListDevice />} />
            <Route path="AddSick" element={<AddDevice />} />
            <Route path="ListSick" element={<ListDevice />} />
            <Route path="UploadSick" element={<UploadDevice />} />
          </Route>
          <Route path="device" element={<DeviceManager />}>
            <Route index element={<ListSick />} />
            <Route path="add" element={<AddSick />} />
            <Route path="list" element={<ListSick />} />
            <Route path="Upload" element={<UploadSick />} />
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
      <Route path="*" element={<ERROR />} />
    </Routes>
  </Router>
);

export default AppRouter;
