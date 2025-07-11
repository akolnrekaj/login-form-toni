import { Outlet } from "react-router";
import { useLoginContext } from "../context/LoginContext";

const Layout = () => {
  const { isLoggedIn, setIsLoggedIn } = useLoginContext();
  return (
    <div>
      <h1>Forma</h1>
      <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
    </div>
  );
};

export default Layout;
