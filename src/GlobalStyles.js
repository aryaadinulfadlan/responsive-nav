import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: hsl(250, 100%, 5%);
        color: hsl(250, 100%, 95%);
        font-family: 'Poppins', sans-serif;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`

export default GlobalStyles