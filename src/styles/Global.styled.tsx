import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, 
*::before, 
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
  }

body {
line-height: 1.2;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

a {
	text-decoration: none;
  }

ul {
	list-style: none;
  }

button {
	background-color: unset;
	border: none;
  }


`;
