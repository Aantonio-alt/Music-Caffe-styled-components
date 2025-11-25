import UseFetch from "../components/UseFetch/UseFetch";
import { useState } from "react";
import SearchResults from "../components/SearchResults/index";
import Library from "../components/Library/index";
import SongDetailApi from "../components/SongsDetailApi/SongDetailApi";
import { PlayListContainer, Title } from "./Detailsong.styles";



const DetailSong = ({idAlbum}) => {
  const { songDetail: apiSongs, isLoading, error } = SongDetailApi({ idAlbum });
  const [addSongs, setAddSongs] = useState([])

  const duracionAMinutos = (ms) => {
    if (!ms) return "0:00"; 
      const totalSeconds = Math.floor(ms / 1000);
      const minutos = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      
    return `${minutos}:${seconds}`;
  };

  const songsMapeo = apiSongs.map(song => ({
    id:song.idTrack,
    name: song.strTrack,
    artist: song.strArtist,
    duration: duracionAMinutos(song.intDuration)
  }))


  const addSongPlayList = (addButton) => {
    if(!addSongs.some(song => song.id === addButton.id)){
      setAddSongs([...addSongs, addButton])

    }
  }
  const removeSongFromPlaylist = (songToRemoveId) => {
      setAddSongs(addSongs.filter(song => song.id !== songToRemoveId));
  }


  return (
    <>
      <UseFetch idAlbum={idAlbum} />
      
        <PlayListContainer>
            <Title className="songs">PlayList</Title>
            <Library library={addSongs} removeSong={removeSongFromPlaylist}/>
        </PlayListContainer>
        
        <PlayListContainer>
            <Title className="songs">Busqueda</Title>
            {
              isLoading ? (
              <p>Cargando...</p>
            ) : error ? (<p>Error al cargar</p>) : (
                <SearchResults songs={songsMapeo} addButton={addSongPlayList} addSongs={addSongs}></SearchResults>
            )
            }
        </PlayListContainer>
    </>
  );
};

export default DetailSong;
