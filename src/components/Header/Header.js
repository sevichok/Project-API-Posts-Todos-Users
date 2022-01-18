import React from 'react';
import Timer from './Timer/Timer';

import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const ButtonsArea = styled('div')`
  display: flex;
  justify-content: space-between;

  > button {
    color:white;
    background: hsl(144,100%,19%);
    width: 20%;
    margin-top: auto;
    border-radius: 6px;
  }

`;

const Navigation = styled('nav')`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 16px 8px;
  box-sizing: border-box;
  margin-bottom: 16px;
  background: hsl(32,100%,50%); //linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)
  box-shadow: 0 0 4px 0 #333;

  > button {
    color:white;
    background: hsl(144,100%,19%);
    width: 20%;
    margin-top: auto;
    border-radius: 6px;
  }

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
    color: ${props => (props.active ? 'black' : 'white')};
  }
`;


function Header() {
  const location = useLocation();

  return (
    <Navigation>
      <ButtonsArea>
        <button>Change Language</button>
        <button>Change Theme</button>
      </ButtonsArea>
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
