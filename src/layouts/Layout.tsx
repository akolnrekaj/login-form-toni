import { NavLink, Outlet } from "react-router";
import { useState } from "react";

const Layout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
          {isLoggedIn && (
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
    </div>
  );
};

export default Layout;
