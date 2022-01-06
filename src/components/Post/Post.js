import React from 'react'

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PostWrapper = styled('div')`
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
    background: linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%);
    width: 100%;
    margin-top: auto;
    border-radius: 6px;
  }
`;

const Post = ({ id, title, body }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <PostWrapper>
      <h6>{title}</h6>
      <p>{body.slice(0, 12)}...</p>
      <button onClick={handleClick}>Detail</button>
    </PostWrapper>
  );
};

export default Post
