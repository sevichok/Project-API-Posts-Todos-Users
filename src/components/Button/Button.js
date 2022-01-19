import React from 'react'
import styled from 'styled-components';

const StyledButton = styled('button')`

  padding: 8px 6px;
  width: 20%;
  margin-top: auto;
  border-radius: 6px;
  border: 2px solid;  
  background-color: ${(props) => props.theme.button.backgroundColor};
  border-color: ${(props) => props.theme.button.borderColor};
  color: ${(props) => props.theme.color.main};

  :hover {
    cursor: pointer;
  } 
`;
//   background-color: ${(props) => props.theme.button.backgroundColor};
//   border-color: ${(props) => props.theme.button.borderColor};
//   color: ${(props) => props.theme.color.main};


//background: hsl(144,100%,19%); - green   hsl(32,100%,50%); - orange
// ${(props) => props.sx ?? {}};

function Button({ children, ...buttonProps }) {
    return (
        <StyledButton {...buttonProps}>
            {children}
        </StyledButton>
    )
}

export default Button
