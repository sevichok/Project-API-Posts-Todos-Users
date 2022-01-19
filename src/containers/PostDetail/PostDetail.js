import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import { getPost, getPostComments } from '../../api/posts';
import { useRequest } from '../../hooks/useRequest';
import { useLocales } from "../../providers/LocalesProvider";

const PostDetailWrapper = styled('section')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 8px 28px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: ${(props) => props.theme.backgroundColor.item};
  color: ${(props) => props.theme.color.first};
`;

const CommentsWrapper = styled('ol')`
  margin: 0px 0px 0px 16px;
  padding: 0px 8px;

  > li {
    border-bottom: 1px solid ${(props) => props.theme.button.backgroundColor};
    padding: 4px;
    margin-bottom: 8px;

    > h5 {
      margin: 0px 0px 8px;
    }

    > span {
      font-size: 12px;
    }

    > p {
      margin: 4px 0px 0px;
    }
  }
`;

const PostDetail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const requestPostComments = useCallback(() => getPostComments(params.id), [params.id]);
  const { data: comments, loading: loadingComments, error: errorComments } = useRequest(requestPostComments);

  const requestPostById = useCallback(() => getPost(params.id), [params.id]);
  const { data: post, loading: loadingPost, error: errorPost } = useRequest(requestPostById);

  const isLoading = loadingComments || loadingPost;
  const isError = errorComments || errorPost;

  const { trans } = useLocales();

  const handleBackClick = () => {
    navigate(`/posts/`);
  };

  return (

    <PostDetailWrapper>
      {isLoading && 'loading...'}
      {isError && 'some error...'}
      {!isLoading && !isError && post && (
        <>
          <h1>{post.title.toUpperCase()}</h1>
          <p>{post.body}</p>
        </>
      )}
      <CommentsWrapper>
        {!isLoading &&
          !isError &&
          comments?.map(comment => (
            <li key={comment.id}>
              <h5>{comment.name}</h5>
              <span>{comment.email}</span>
              <p>{comment.body}</p>
            </li>
          ))}
      </CommentsWrapper>
      <Button onClick={handleBackClick}>{trans.backButton}</Button>
    </PostDetailWrapper>
  );
};

export default PostDetail;

