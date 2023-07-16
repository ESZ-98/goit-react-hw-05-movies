import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

const AdditionalInfo = () => {
  return (
    <>
      <h4>Additional information</h4>
      <ul className={css.infoBorder}>
        <li>
          <Link to={'cast'} replace>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AdditionalInfo;
