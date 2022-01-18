import React, { useCallback } from 'react';

import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getTodo } from '../../api/todos';
import { useRequest } from '../../hooks/useRequest';

const TodoDetailWrapper = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 8px 28px;
  box-sizing: border-box;
  background: white;
  border-radius: 6px;
`;

function TodoDetail() {
    const params = useParams();

    const requestTodoById = useCallback(() => getTodo(params.id), [params.id]);
    const { data: todo, loading: loadingPost, error: errorPost } = useRequest(requestTodoById);

    const isLoading = loadingPost;
    const isError = errorPost;

    return (
        <TodoDetailWrapper>
            {isLoading && 'loading...'}
            {isError && 'some error...'}
            {!isLoading && !isError && todo && (
                <>
                    <h1>{todo.title.toUpperCase()}</h1>
                    <p>title : {todo.title}</p>
                    <p>completed : {todo.completed.toString()}</p>
                </>
            )}

        </TodoDetailWrapper>
    )
}

export default TodoDetail
