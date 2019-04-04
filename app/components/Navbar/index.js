import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import StyledLi from './StyledLi';

const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const Navbar = props => (
  <header>
    <h1>Stanley Tiu</h1>
    <Nav>
      {props.menuItems.map(menuitem => (
        <StyledLi>
          <NavLink
            key={menuitem}
            activeStyle={{ color: 'green' }}
            to={`/${menuitem.replace(/\s+/g, '+')}`}
          >
            {menuitem}
          </NavLink>
        </StyledLi>
      ))}
    </Nav>
  </header>
);
export default Navbar;

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  menuItems: PropTypes.array,
};
