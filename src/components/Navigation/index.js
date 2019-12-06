import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { userIdSelector } from '../../store/selectors';
import './styles.css';

function Navigation({ userId }) {
  const location = useLocation();
  return (
    <div>
      <ul className='nav'>
        <li className='nav_item'>
          <NavLink
            to={{
              pathname: '/',
              state: {
                from: location
              }
            }}
            exact
            activeClassName='nav_item_active'
          >
            Home
          </NavLink>
        </li>
        <li className='nav_item'>
          <NavLink
            to={{
              pathname: '/login',
              state: {
                from: location
              }
            }}
            exact
            activeClassName='nav_item_active'
          >
            Login
          </NavLink>
        </li>
        <li className='nav_item'>
          <NavLink
            to={{
              pathname: '/signup',
              state: {
                from: location
              }
            }}
            exact
            activeClassName='nav_item_active'
          >
            Signup
          </NavLink>
        </li>
        <li className='nav_item'>
          <NavLink
            to={{
              pathname: `/profile/${userId}`,
              state: { from: location }
            }}
            exact
            activeClassName='nav_item_active'
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  userId: userIdSelector(state)
});

export default connect(mapStateToProps)(Navigation);
