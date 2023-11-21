import React from 'react';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <nav className="navbar navbar-expand-xl navbar-fixed">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse custom-navbar-userIn p-2"
          id="navbarNav"
        >
          <ul className="navbar-nav text-end">
            <li className="nav-item">
              <NavLink to="/users" className="custom-navbar-links">
                Diary
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users/calculator" className="custom-navbar-links">
                Calculator
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
