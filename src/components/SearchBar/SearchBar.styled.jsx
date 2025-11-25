import styled from "styled-components";


const ContainSection = styled.section`
    padding: 1.5rem;
`
const TittleAlbum = styled.h2`
    padding: 0 1rem ;
    font-size: 2.5rem;

`
const ResultadosBusqueda = styled.section`
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding: 1rem;
    height: auto;
    align-items: flex-start;
`
const ItemBuscado = styled.article`
    background: ${props => props.theme.colors.secondary};
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    overflow: hidden;
    flex: 0 0 15rem;
    max-height: 23rem;
`
const Tittle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: .2rem;
    padding:  0.4rem 0 .8rem 0;
    color: ${props => props.theme.colors.blanco};
`
const ImagenSearch = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    margin-top: 0.5rem;
    object-fit: cover;
    aspect-ratio: 5 / 4;
`
const Texto = styled.p`
    color: ${props => props.theme.colors.primary};
    align-self: start;
    padding: .2rem;
`
const SinBusqueda = styled.p`
    color: ${props => props.theme.colors.secondary};
    align-self: start;
    padding: .2rem;
    font-size: 1.5 ;
`
const Load = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`
 const LoadingGift = styled.img`
    width: 8%;
    background-color: ${props => props.theme.colors.primary};
    padding: 1.5rem;
    border-radius: 1rem;
`;
export {
    ContainSection,
    TittleAlbum,
    ResultadosBusqueda,
    ItemBuscado,
    Tittle,
    Texto,
    ImagenSearch,
    SinBusqueda,
    Load,
    LoadingGift,

}