import React from 'react';
import Header from "./components/Header";
import AppRouter from './router/AppRouter';
import ThemeProvider from "./providers/ThemeProvider";

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (<>
    <ThemeProvider>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </ThemeProvider>
  </>
  );
}

export default App;
