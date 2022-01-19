import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getTodo } from '../../api/todos';
import { useRequest } from '../../hooks/useRequest';
import { useLocales } from "../../providers/LocalesProvider";

const TodoDetailWrapper = styled('section')`
  width: 100%;
  max-width: 800px;
  margin: 8px auto;
  padding: 8px 28px;
  box-sizing: border-box;
  border-radius: 6px;
  background-color: ${(props) => props.theme.backgroundColor.item};
  color: ${(props) => props.theme.color.first};

  > h1 {
    border-bottom: 1px solid ${(props) => props.theme.button.backgroundColor};
    padding-bottom: 8px;
  }
`;

function TodoDetail() {
    const params = useParams();
    const navigate = useNavigate();

    const requestTodoById = useCallback(() => getTodo(params.id), [params.id]);
    const { data: todo, loading: loadingTodo, error: errorTodo } = useRequest(requestTodoById);

    const isLoading = loadingTodo;
    const isError = errorTodo;

    const handleBackClick = () => {
        navigate(`/todos/`);
    };

    const { trans } = useLocales();

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
            <Button onClick={handleBackClick}>{trans.backButton}</Button>
        </TodoDetailWrapper>
    )
}

export default TodoDetail
