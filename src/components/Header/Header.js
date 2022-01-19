import React from 'react';
import Timer from './Timer/Timer';
import Button from '../Button/Button';
import { useTheme } from "../../providers/ThemeProvider"

import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const ButtonsArea = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const Navigation = styled('nav')`
  max-width: 1200px;
  margin: auto;
  padding: 16px 8px;
  box-sizing: border-box;
  margin-bottom: 16px;
  background-color: ${(props) => props.theme.backgroundColor.header};
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
  padding: 0px;
  margin: auto;

  > a {
    font-size : 30px;
    text-decoration: ${props => (props.active ? 'underline' : 'none')};
    color: ${props => (props.active ? 'black' : 'white')};
  }
`;


function Header() {
  const location = useLocation();
  const { toggleTheme } = useTheme();

  return (
    <Navigation>
      <ButtonsArea>
        <Button>Change Language</Button>
        <Button onClick={toggleTheme}>Change Theme</Button>
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
