import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faHome, faFolderOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav--list">
        <li className="nav--list-logo">
          <NavLink className="nav--list-link" to="#">
            <span className="nav--list-link-text">Portfolio</span>
            <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-primary"/>
          </NavLink>
        </li>
        <li className="nav--list-item">
          <NavLink className="nav--list-link" to="#">
            <FontAwesomeIcon icon={faHome} className="fa-primary"/>
            <span className="nav--list-link-text">Home</span>
          </NavLink>
        </li>
        <li className="nav--list-item">
          <NavLink className="nav--list-link" to="#">
            <FontAwesomeIcon icon={faFolderOpen} className="fa-primary"/>
            <span className="nav--list-link-text">Projects</span>
          </NavLink>
        </li>
        <li className="nav--list-item">
          <NavLink className="nav--list-link" to="#">
            <FontAwesomeIcon icon={faEnvelope} className="fa-primary"/>
            <span className="nav--list-link-text">Contact me</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
