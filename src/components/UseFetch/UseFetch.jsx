import axios from "axios"
import { useEffect, useState } from "react"
import desconocido from "../../assets/desconocido.png"
import loadingGift from "../../assets/cargando.gif"
import { ContainSearchTwo, ContainText, ImagenAlbum, ImagenContain, TitleAlbum, Text, LoadingGift, Load } from "./UseFetch.styled"

const UseFetch = ({idAlbum}) => {
    const [detallesAlbum, setDetallesAlbum] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() =>{
        if (!idAlbum) {
            return
        }
        const mostrarDetalles = async () => {
            setIsLoading(true)
            setError(null)


            try {
                    const response = await axios.get(`/api/v1/json/123/album.php?m=${idAlbum}`)

                    setDetallesAlbum(response.data.album || [])


            } catch (error) {
                console.log(error)
                setError("Error al cargar datos")
                setIsLoading(false)               
            } finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 500)
            }
        }
        mostrarDetalles()
    }, [idAlbum])

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
            {detallesAlbum.map((detail) => {
                console.log(detail)
                const {strAlbum, strArtist, intYearReleased, strAlbumThumb, strDescriptionEN, strGenre, idAlbum} = detail;

                return (
                    <ContainSearchTwo key={idAlbum}>
                        <TitleAlbum>{strAlbum}</TitleAlbum>
                        <ContainText>
                            <Text>Artista: {strArtist ? (strArtist) : ("Desconocido")}</Text>
                            <Text>Año: {intYearReleased ? (intYearReleased) : ("Desconocido")}</Text>
                            <Text>Genero: {strGenre ? (strGenre) : ("Desconocido")}</Text>
                            <Text>Descripción: {strDescriptionEN ? (strDescriptionEN) : ("Desconocido")}</Text>
                        </ContainText>  

                        <ImagenContain>
                            <ImagenAlbum className="imagenSearch2" src={strAlbumThumb ? (strAlbumThumb) : (desconocido)} alt="Album Imagen" />
                        </ImagenContain>


                    </ContainSearchTwo>
                )
            })}
        
        
        </>
    )
}


export default UseFetch