import { NavLink, Outlet } from "react-router";
import { useLoginContext } from "../context/LoginContext";

const Layout = () => {
  const { isLoggedIn, setIsLoggedIn } = useLoginContext();
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/items">Items</NavLink>
          </li>
          <li>
            <NavLink to="/forma">Potvrda podataka-forma</NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/settings">settings</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
    </div>
  );
};

export default Layout;
