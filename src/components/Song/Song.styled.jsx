import styled from "styled-components";


const SongTitle = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto auto ;
    padding: .8rem 1.5rem;
    background-color: ${props => props.theme.colors.blanco};
    border-radius: 1rem;
    cursor: pointer;
    transition: transform .3s ease-in-out,  background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    width: 100%;

`
const ContainTwo = styled.div`
    grid-column: 1/2;
    grid-row: 2;
    font-style: italic;
    color: $color-subtitulos;
    font-size: 1rem;
`
const ButtonContainer = styled.button`
    grid-column: 2;
    grid-row: 1/3;
    align-self: center;
    justify-self: flex-end;
    background-color: transparent;
    border: 0;
`
const AddButton = styled.button`
    padding: .8rem 1.5rem;
    background-color: transparent;
    border-radius: 1rem;
    width: 100%;
    cursor: pointer;
    transition: transform .3s ease-in-out,  background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    font-size: 1.3rem;

        &:hover{ 
            transform: scale(1.01);
            background-color: $color-subtitulos;
            color: $color-titulos;
        }
        &:active{
            transform: scale(.90);
            background-color: $color-fondo;
            
        }
`
const Title = styled.h2`
    grid-column: 1/3;
    grid-row: 1;
    font-family: "Story Script", sans-serif;
    padding-bottom: .3rem;
    cursor: pointer;
    user-select: none;
    color: ${props => props.theme.colors.secondary};
    font-size: 1.5rem;
`
const SongArtist = styled.p`
    font-family: 'Courier New', Courier, monospace;
    margin-right: auto;       
    user-select: none;
    font-size: 1.1rem;
`
const SongDuration = styled.p`
    display: flex;
    font-family: 'Courier New', Courier, monospace;
    user-select: none;
    font-size: 1.1rem;
`

export {
    SongTitle,
    ContainTwo,
    ButtonContainer,
    AddButton,
    Title,
    SongArtist,
    SongDuration,

}