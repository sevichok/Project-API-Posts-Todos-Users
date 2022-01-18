import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const UserWrapper = styled('div')`
  flex: 1 0 calc(20% - 8px);
  display: flex;
  flex-direction: column;
  border: 1.5px solid gray;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 8px;
  margin: 4px;
  background: white;

  > h6 {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid gray;
    padding-bottom: 8px;
    margin-top: 0px;
    margin-bottom: 8px;
  }

  > p {
    margin-top: auto;
    font-size: 14px;
    font-weight: 300;
  }

  > button {
    color:white;
    background: hsl(144,100%,19%);
    width: 100%;
    margin-top: auto;
    border-radius: 6px;
  }
`;

function User({ id, name, username }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/users/${id}`);
    };

    return (
        <UserWrapper>
            <h6>Name: {name}</h6>
            <p>Id: {id}</p>
            <p>Username: {username}</p>
            <button onClick={handleClick}>Detail</button>
        </UserWrapper>
    )
}

export default User
