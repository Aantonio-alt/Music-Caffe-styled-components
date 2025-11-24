import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle `
    ${reset}

    html, body {
        min-height: 100dvh;
    }
    body{
        position: relative;
        background-color: ${props => props.theme.colors.primary}; 
    }
    h1{
        font-family: ${props => props.theme.fonts.titulo};
        font-size: ${props => props.theme.fontSize.xl};
        color: ${props => props.theme.colors.blanco};
    }   
    h2 {
        font-family: ${props => props.theme.fonts.titulo};
        font-size: ${props => props.theme.fontSize.g};
        color: ${props => props.theme.colors.secondary};

    } 
    h3, h4, h5, h6 {
        font-family: ${props => props.theme.fonts.subtitulo};
        font-size: ${props => props.theme.fontSize.m};
        color: ${props => props.theme.colors.tertiary};
    }
    p{
        font-family: ${props => props.theme.fonts.texto};
        font-size: ${props => props.theme.fontSize.p};
        color: ${props => props.theme.colors.secondary};

    }
    ::-webkit-scrollbar {
        display: none;
    }
`


export default GlobalStyles