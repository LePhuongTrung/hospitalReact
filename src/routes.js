import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Manager from "./pages/Manager/homeManager";
import Signup from "./pages/SignUp";
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

      {/* <Route path="/products" element={<ListProduct />} /> */}
      {/* </Route> */}
    </Routes>
  </Router>
);

export default AppRouter;
