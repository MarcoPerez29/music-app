import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    body {
        font-family: ${ props => props.theme.fonts.base };
        background-color: ${ props => props.theme.colors.primary};
        color: #fff;
    }
    a {
        text-decoration: none;
    }
`

export default GlobalStyle;