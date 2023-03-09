import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="navlink-container">
        <NavLink to="/" style={{ fontWeight: "bold" }}>
          Habit Tracker
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/details">Details</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
