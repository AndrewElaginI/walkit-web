import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles.css';

function Navigation() {
  const id = 5;
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
              pathname: `/profile/${id}`,
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

export default Navigation;
