import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddRoom from "./manager/pages/room/AddRoom";
import Manager from "./manager/pages/room/ListRoom";
import ERROR from "./public/pages/Error/404";
import Login from "./public/pages/Login";
import Signup from "./public/pages/SignUp";
import User from "./user/pages/User";
// login => list of books

const AppRouter = () => (
  <Router>
    <Routes>
      {/* <Route path="/"> */}
      <Route path="Login" element={<Login />} />
      <Route path="SignUp" element={<Signup />} />
      <Route path="user" element={<User />}></Route>
      <Route path="Manager" element={<Manager />}></Route>
      <Route path="AddRoom" element={<AddRoom />} />
      <Route path="ERROR" element={<ERROR />} />

      {/* <Route path="/products" element={<ListProduct />} /> */}
      {/* </Route> */}
    </Routes>
  </Router>
);

export default AppRouter;
