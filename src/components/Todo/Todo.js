import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TodoWrapper = styled('div')`
  flex: 1 0 calc(25% - 8px);
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

function Todo({ id, title, completed }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/todos/${id}`);
  };

  return (
    <TodoWrapper>
      <h6>Title: {title}</h6>
      <p>Id: {id}</p>
      <p>Completed: {completed.toString()}</p>
      <button onClick={handleClick}>Detail</button>
    </TodoWrapper>
  )
}

export default Todo
