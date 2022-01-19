import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';

const AppDiv = styled('div')`
  font-family: 'Playfair Display', serif;
`;

ReactDOM.render(
  <React.StrictMode>
    <AppDiv>
      <App />
    </AppDiv>
  </React.StrictMode>,
  document.getElementById('root')
);
