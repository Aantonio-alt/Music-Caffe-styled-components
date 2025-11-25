import styled from "styled-components";


const ContainSearchTwo = styled.section`
    padding: 1rem 3rem 2rem 3rem  ;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    background-color: ${props => props.theme.colors.secondary};
    min-height: 20rem;
    height: auto;
`
const TitleAlbum = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 2.4rem;
    align-self: center;
    grid-column: 1/3;
    grid-row: 1;
    background-color: ${props => props.theme.colors.primary};
    margin: 0 0 1rem 0;
    padding: 1rem;
    border-radius: 1rem;
`
const ContainText = styled.section`
    padding: .8rem;
    display: flex;
    flex-direction: column;
    max-height: 16rem;
    overflow-y: auto;
    grid-column: 2;
    grid-row: 2;
`
const Text = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.primary};
    padding: .2rem;
`
const ImagenContain = styled.div`
    grid-column: 1;
    grid-row: 2;
`
const ImagenAlbum = styled.img`
    width: 100%;
    border-radius: .7rem;
    max-height: 20rem;
    object-fit: cover;
    height: 100%;
`
const Load = styled.section`
    padding: 1rem  3rem  ;
    background-color: ${props => props.theme.colors.secondary};
    min-height: 8rem;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
 const LoadingGift = styled.img`
    width: 10%;
    background-color: ${props => props.theme.colors.primary};
    padding: 1.5rem;
    border-radius: 1rem;
`;


export{
    ContainSearchTwo,
    ImagenContain,
    ImagenAlbum,
    ContainText,
    TitleAlbum,
    Text,
    LoadingGift,
    Load,

}