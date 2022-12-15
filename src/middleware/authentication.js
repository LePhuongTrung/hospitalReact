import { Navigate, Outlet } from "react-router-dom";

const AuthenticationRoutes = () => {
  const isLogin = localStorage.getItem("access_token");

  return isLogin != null ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthenticationRoutes;
