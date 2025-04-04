import React from "react";
import { Link } from "react-router-dom";
import { SongImage, SongInfo, SongList, SongTitle } from "./style";

const Song = ({ idAlbum, strAlbum, strArtist, intYearReleased, strAlbumCDart}) => {
  return (
      <SongList>
        <SongImage 
          alt={`${strAlbumCDart} AlbumPoster`}
          src={strAlbumCDart}/>
        <SongTitle>{strAlbum}</SongTitle>
        <SongInfo>Artista: {strArtist}</SongInfo>
        <SongInfo score={intYearReleased}>Año: {intYearReleased}</SongInfo>
        <Link to={`/song/${idAlbum}`}>Ver detalles</Link>
      </SongList>
  );
};

export default Song;