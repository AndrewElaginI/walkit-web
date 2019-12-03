import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

function Navigation() {
  const id = 5;
  return (
    <div>
      <ul className='nav'>
        <li className='nav_item'>
          <NavLink to='/' exact activeClassName='nav_item_active'>
            Home
          </NavLink>
        </li>
        <li className='nav_item'>
          <NavLink to='/login' exact activeClassName='nav_item_active'>
            Login
          </NavLink>
        </li>
        <li className='nav_item'>
          <NavLink
            to={`/profile/:${id}`}
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
