import { NavLink, Outlet } from "react-router";

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/items", label: "Items" },
  { path: "/settings", label: "settings" },
  { path: "/login", label: "Login" },
];

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: "#f4f4f4",
};

const ulStyle: React.CSSProperties = {
  display: "flex",
  listStyle: "none",
  gap: "20px",
  padding: 0,
  margin: 0,
};

const Layout = () => {
  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
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
