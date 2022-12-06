import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddRoom from "./pages/Manager/AddRoom";
import Manager from "./pages/Manager/ListRoom";
import ERROR from "./pages/public/Error/404";
import Login from "./pages/public/Login";
import Signup from "./pages/public/SignUp";
import User from "./pages/User/User";
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
