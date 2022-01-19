import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getUser } from '../../api/users';
import { useRequest } from '../../hooks/useRequest';
import { useLocales } from "../../providers/LocalesProvider";

const UserDetailWrapper = styled('section')`
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

function UserDetail() {
    const params = useParams();
    const navigate = useNavigate();

    const requestUserById = useCallback(() => getUser(params.id), [params.id]);
    const { data: user, loading: loadingUser, error: errorUser } = useRequest(requestUserById);

    const isLoading = loadingUser;
    const isError = errorUser;

    const { trans } = useLocales();

    const handleBackClick = () => {
        navigate(`/users/`);
    };
    return (
        <UserDetailWrapper>
            {isLoading && 'loading...'}
            {isError && 'some error...'}
            {!isLoading && !isError && user && (
                <>
                    <h1>{user.name.toUpperCase()}</h1>
                    <p>username : {user.username}</p>
                    <p>email : {user.email}</p>
                    <p>address : {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                    <p>links : {user.phone}, {user.website}</p>
                    <p>company : {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>
                </>
            )}
            <Button onClick={handleBackClick}>{trans.backButton}</Button>

        </UserDetailWrapper>
    )
}

export default UserDetail
