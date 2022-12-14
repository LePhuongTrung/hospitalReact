import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Manager from "./manager/pages/Manager";
import AddRoom from "./manager/pages/room/AddRoom";
import ListRoom from "./manager/pages/room/ListRoom";
import Room from "./manager/pages/room/Room";

import ERROR from "./public/pages/Error/404";
import ERROR1 from "./public/pages/Error/noPermission";

import Login from "./public/pages/auth/Login";
import Signup from "./public/pages/auth/SignUp";
import VerificationSuccess from "./public/pages/auth/verificationSuccess";
import User from "./user/pages/User";
// login => list of books

const AppRouter = () => (
  <Router>
    <Routes>
      {/* <Route path="/"> */}
      <Route path="Login" element={<Login />} />
      <Route path="verification/:Link" element={<VerificationSuccess />} />

      <Route path="SignUp" element={<Signup />} />
      <Route path="user" element={<User />}></Route>
      <Route path="Manager" element={<Manager />}>
        <Route path="Room" element={<Room />}>
          <Route path="AddRoom" element={<AddRoom />} />
          <Route path="ListRoom" element={<ListRoom />} />
        </Route>
      </Route>

      <Route path="ERROR" element={<ERROR />} />
      <Route path="NoPermission" element={<ERROR1 />} />

      {/* <Route path="/products" element={<ListProduct />} /> */}
      {/* </Route> */}
    </Routes>
  </Router>
);

export default AppRouter;
