import styled from "styled-components";
import { Link } from "react-router-dom"

const HeaderContainer = styled.header`
    display: flex;
    background-color: ${props => props.theme.colors.secondary};
    padding: 1rem 2rem;
    font-family: "Story Script", sans-serif;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.tertiary};
    justify-content: start;
    align-items: center;
`
const Formulario = styled.form`
    display: flex;
    padding: .3rem;
    margin: .5rem 1rem .5rem 2rem;
    border-radius: 1rem;
    border-color: white;
    background-color: ${props => props.theme.colors.primary};
    gap: 1rem;
    flex-grow: .4;

`
const Buscador = styled.input`
    display: flex;
    padding: .5rem .5rem .5rem 1rem;
    border-radius: .7rem;
    margin: .3rem .5rem;
    border-color: ${props => props.theme.colors.blanco};
    width: 100%;
    color: ${props => props.theme.colors.secondary};
    font-family: 'Courier New', Courier, monospace;

    &:hover{
        border-color: ${props => props.theme.colors.secondary};
    }
    &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.tertiary};
    }

`

const Button = styled.button`
    padding: .5rem;
    font-size: 1.1rem;
    border: transparent;
    margin: .3rem .3rem .3rem 0;
    cursor: pointer;
    background-color: transparent;
`

const MenuOptions = styled.nav`
    margin-left: auto;
`
const Navegacion = styled(Link)`
    padding: .3rem;
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
`

export {
    HeaderContainer,
    Formulario,
    Buscador,
    Button,
    MenuOptions,
    Navegacion,
}