import styled from "styled-components";


const PlayListContainer = styled.section`
    display: flex ;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 1rem;
    flex-direction: column;
    padding: .5rem 2rem;
    margin: 1rem 3rem;
    align-items: center ;
`
const Title = styled.h2`
    color: ${props => props.theme.colors.blanco};
    display: flex;
    font-family: "Story Script", sans-serif;
    font-size: 2rem;
    padding: 1rem 2rem;
`

export{
    PlayListContainer,
    Title,

}