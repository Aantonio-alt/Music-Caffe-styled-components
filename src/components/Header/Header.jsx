import { Link } from "react-router-dom"
import { useState } from 'react';
import { Buscador, Formulario, HeaderContainer, Button, MenuOptions, Navegacion} from "./Header.styled";

const Header = ({busqueda}) => {
    const [busquedaInput, setBusquedaInput] = useState("")  

    const searchSong = (e) => {
        e.preventDefault()
        busqueda(busquedaInput)
    }

    return(
        <HeaderContainer>
            <h1>Music Caffe </h1>
            
            <Formulario onSubmit={searchSong}>

                    <Buscador type="search" placeholder="Buscar Artista" value={busquedaInput} onChange={(e) => setBusquedaInput(e.target.value)}/>

                    <Button  type="submit"><i class="bi bi-search"></i></Button>

            </Formulario>

            <MenuOptions>
                <Navegacion  to="/home" >Inicio</Navegacion> 
                <Navegacion  to="/detailSong">Detalles</Navegacion>
            </MenuOptions>

        </HeaderContainer>        
    )
}


export default Header
