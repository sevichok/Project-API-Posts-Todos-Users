import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useLocales } from "../../providers/LocalesProvider";

const UserWrapper = styled('div')`
  flex: 1 0 calc(20% - 8px);
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 8px;
  margin: 4px;
  background-color: ${(props) => props.theme.backgroundColor.item};
  color: ${(props) => props.theme.color.first};

  > h6 {
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid ${(props) => props.theme.button.backgroundColor};
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
    width: 100%;
  }
`;

function User({ id, name, username }) {
    const navigate = useNavigate();
    const { trans } = useLocales();

    const handleClick = () => {
        navigate(`/users/${id}`);
    };

    return (
        <UserWrapper>
            <h6>Name: {name}</h6>
            <p>Id: {id}</p>
            <p>Username: {username}</p>
            <Button onClick={handleClick}>{trans.detailButton}</Button>
        </UserWrapper>
    )
}

export default User
