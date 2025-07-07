import { NavLink, Outlet } from "react-router";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/items", label: "Items" },
  { path: "/settings", label: "settings" },
];

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          {links.map((link) => (
            <NavLink key={link.label} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
