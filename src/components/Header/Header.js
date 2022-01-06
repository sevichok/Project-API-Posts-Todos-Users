import React from 'react';
import Timer from './Timer/Timer';

import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Navigation = styled('nav')`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 16px 8px;
  box-sizing: border-box;
  margin-bottom: 16px;
  background: linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%);
  box-shadow: 0 0 4px 0 #333;

  > ul {
    display: flex;
    flex-direction: row;
    margin: 0px 0px 0px 8px;
    padding: 0px;
  }
`;

const NavItem = styled('li')`
  list-style: none;
  padding: 0;
  margin: auto;

  > a {
    font-family: 'Playfair Display', serif;
    font-size : 30px;
    text-decoration: ${props => (props.active ? 'underline' : 'none')};
    color: ${props => (props.active ? 'white' : '#66B2FF')};
  }
`;


function Header() {
  const location = useLocation();

  return (
    <Navigation>
      <Timer />
      <ul>
        <NavItem active={location.pathname.includes('posts')}>
          <Link to="/posts">Posts</Link>
        </NavItem>
        <NavItem active={location.pathname.includes('todos')}>
          <Link to="/todos">Todos</Link>
        </NavItem>
        <NavItem active={location.pathname.includes('users')}>
          <Link to="/users">Users</Link>
        </NavItem>
      </ul>
    </Navigation>
  );
}

export default Header;
