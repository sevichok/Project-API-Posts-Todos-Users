import React, { useState, useCallback, createContext, useContext } from "react";
import {
    ThemeProvider as StyledThemeProvider,
    createGlobalStyle,
} from "styled-components";
import { firstTheme, secondTheme } from "./constants";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    width: 100%;
    background-color: ${(props) => props.theme.backgroundColor.main};
  }
`;

const ThemeContext = createContext({});
export const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("firstTheme");

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "firstTheme" ? "secondTheme" : "firstTheme"));
    }, []);

    return (
        <StyledThemeProvider theme={theme === "firstTheme" ? firstTheme : secondTheme}>
        <GlobalStyle />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </StyledThemeProvider>
    )
}

export default ThemeProvider
