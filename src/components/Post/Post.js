import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const PostWrapper = styled('div')`
  flex: 1 0 calc(25% - 8px);
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

const Post = ({ id, title, body }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <PostWrapper>
      <h6>{title}</h6>
      <p>{body.slice(0, 12)}...</p>
      <Button onClick={handleClick}>Detail</Button>
    </PostWrapper>
  );
};

export default Post
