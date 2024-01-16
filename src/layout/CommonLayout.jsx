import { NavLink, Outlet } from "react-router-dom";
import "./CommonLayout.css";

const CommonLayout = () => {
  return (
    <div className="main-container">
      <header className="header-section">
        <nav className="navbar">
          <NavLink
            className={`nav-1 ${({ isActive }) => (isActive ? "active" : "")}}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`nav-2 ${({ isActive }) => (isActive ? "active" : "")}}`}
            to="watchlist"
          >
            Watchlist
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default CommonLayout;
