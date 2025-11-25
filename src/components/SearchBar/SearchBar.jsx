import axios from "axios"
import { useEffect, useState } from "react"
import loadingGift from "../../assets/cargando.gif"
import { Link, useNavigate } from "react-router-dom"
import desconocido from "../../assets/desconocido.png"
import { ContainSection, ImagenSearch, ItemBuscado, ResultadosBusqueda, SinBusqueda, Texto, Tittle, TittleAlbum, Load, LoadingGift } from "./SearchBar.styled"

const SearchBar = ({artistName , albumClick}) => {
    const [albums, setAlbums] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

        useEffect(() => {
            if (!artistName){
                return 
            }

            const fetchAlbums = async () => {
                setIsLoading(true);
                setError(null);  
                 
                try {
                    const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${artistName}`);

                    setAlbums(response.data.album || [])

                } catch (error) {
                    console.error(error)
                    setError("Error al cargar datos")
                    setIsLoading(false)
                } finally {
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 500)
                }
            }
            fetchAlbums();

        }, [artistName])

        const navigate = useNavigate()
        const itemClickeado = (album) => {
            const idExtraido = album.idAlbum
            albumClick(idExtraido)
            navigate("/DetailSong")
        }

                    
        if (isLoading){
            return  <Load> 
                        <LoadingGift src={loadingGift} alt="cargando..."/> 
                    </Load>;
            
        }
        if (error){
            return <p>{error}</p>;
        }
                            

    return (
        <>
            <ContainSection>
                <TittleAlbum>Albumes de {artistName}</TittleAlbum>
                <ResultadosBusqueda>
                {albums.length > 0 ? (
                albums.map((album) => {
                    const {
                        idAlbum, strArtist, strAlbum, strDescriptionES, strAlbumThumb, intYearReleased} = album

                    return(
                        <ItemBuscado 
                        key={idAlbum} 
                        onClick={ () => itemClickeado(album) }>
                            <Tittle>{strAlbum}</Tittle>
                            <Texto>Artista: {strArtist}</Texto>
                            <Texto>Año: {intYearReleased}</Texto>

                            <ImagenSearch alt="AlbumImage" src={strAlbumThumb ? (strAlbumThumb) : (desconocido)} />
                        </ItemBuscado>
                    )
                } )
            ) : (
                <SinBusqueda>No se encontro nada</SinBusqueda>
            )
                }
                
                </ResultadosBusqueda>
            </ContainSection>
        </>
    )
}

export default SearchBar