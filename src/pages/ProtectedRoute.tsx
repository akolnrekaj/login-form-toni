import { Outlet, Navigate } from "react-router";
import { useLoginContext } from "../context/LoginContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useLoginContext();

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
//koment for commit test

export default ProtectedRoute;
