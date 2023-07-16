import React, { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNavigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.isActive : css.headerLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? css.isActive : css.headerLink
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
