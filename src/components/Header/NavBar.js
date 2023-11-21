import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './images/logo.png';
import slim from './images/slim.svg';
import mom from './images/mom.svg';
import border from './images/border.svg';
import { UserMenu } from '../userMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBar } from './AppBar';

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className="custom-navbar d-flex align-items-center row m-4 pb-2 navbar-fixed">
      <div className="row">
        <div className="col-lg-2 col-3 col-sm-2 d-flex justify-content-xl-start">
          <NavLink to="/" className="nav-link">
            <img src={logo} alt="Logo" className="logo mt-2" />
            <div className="imgLogo">
              <img
                src={slim}
                alt="Slim"
                className="mt-5 d-none d-xl-inline d-sm-inline"
              />
              <img
                src={mom}
                alt="Mom"
                className="mt-5 mom d-none d-xl-inline d-sm-inline"
              />
            </div>
          </NavLink>
        </div>
        <div className="col-lg-10 col-9 col-sm-10 d-flex flex-row justify-content-xl-start justify-content-md-end custom-navbar-second">
          <img src={border} alt="border" className="mt-5 d-none d-xl-inline" />
          <ul className="nav list-inline order-xl-1 order-lg-1 order-md-2 d-flex order-sm-1 justify-content-sm-end align-content-end">
            <li className="nav-inline-item">{isLoggedIn && <AppBar />}</li>
            <li className="nav-inline-item">
              {!isLoggedIn && (
                <>
                  <NavLink to="/login" className="custom-navbar-links">
                    Login
                  </NavLink>
                  <NavLink to="/register" className="custom-navbar-links">
                    Registration
                  </NavLink>
                </>
              )}
            </li>
          </ul>
          <div className="flex-xl-grow-1 d-flex justify-content-xl-end pb-2 order-xl-2 order-lg-2 order-md-1">
            {isLoggedIn && <UserMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
