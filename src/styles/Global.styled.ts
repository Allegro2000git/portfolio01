import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`

*, 
*::before, 
*::after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
  }

 html {
   font-size: 16px;
}

body {
line-height: 1.2;
font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}


a {
	text-decoration: none;
	cursor: pointer;
  }

ul {
	list-style: none;
  }

button {
	background-color: unset;
	border: none;
	cursor: pointer;
  }

`;
