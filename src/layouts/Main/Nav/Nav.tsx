import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav--list">
        <li className="nav--list-item">
          <NavLink className="nav--list-link" to="#">
            <FontAwesomeIcon icon={faHome} className="fa-primary"/>
            <span className="nav--list-link-text">Home</span>
          </NavLink>
        </li>
        <li className="nav--list-item">
          <NavLink className="nav--list-link" to="#">
            <span className="nav--list-link-text">View Projects</span>
          </NavLink>
        </li>
        <li className="nav--list-item">
          <NavLink className="nav--list-link" to="#">
            <span className="nav--list-link-text">Contact me</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
