import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #202120;
        color: #fff;
        font-family: "Roboto", sans-serif;
    }

`;
