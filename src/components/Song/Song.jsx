import React from "react"
import { AddButton, ButtonContainer, ContainTwo, SongArtist, SongDuration, SongTitle, Title } from "./Song.styled"

const Song = ({artist, duration, name, addButton, removeSong, isAdd}) => {
    return(
        <SongTitle >
            <Title>{name}</Title>
            <ContainTwo >
                <SongArtist ><span>Artista: </span> {artist} </SongArtist>
                <SongDuration ><span>Duración: </span>{duration} </SongDuration>
            </ContainTwo>

                <ButtonContainer >
                    {addButton && (
                        isAdd ? (
                        <AddButton disabled onClick={addButton} className="addButton"><i class="bi bi-folder-check"></i></AddButton>  )
                     : ( <AddButton onClick={addButton} className="addButton"><i class="bi bi-folder-plus"></i></AddButton> )
                     )}

                    {removeSong ? (
                        <AddButton onClick={removeSong} className="addButton"><i class="bi bi-trash"></i></AddButton> 
                    ) : null }
                </ButtonContainer> 

        </SongTitle>
    )
}


export default Song

