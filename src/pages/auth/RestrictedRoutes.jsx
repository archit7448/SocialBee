import { Navigate, Outlet } from "react-router-dom";

const RestrictedRoute = () => {
  const token = localStorage.getItem("token");

  return token !== null ? <Navigate to="/" replace /> : <Outlet />;
};

export { RestrictedRoute };
