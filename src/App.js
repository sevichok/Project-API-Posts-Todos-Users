import React from 'react';
import Header from "./components/Header";
import AppRouter from './router/AppRouter';
import ThemeProvider from "./providers/ThemeProvider";
import LocalesProvider from "./providers/LocalesProvider";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (<>
    <ThemeProvider>
      <LocalesProvider>
        <Router>
          <Header />
          <AppRouter />
        </Router>
      </LocalesProvider>
    </ThemeProvider>
  </>
  );
}

export default App;
