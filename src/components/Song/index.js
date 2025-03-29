import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";

const Song = ({ idAlbum, strAlbum, strArtist, strStyle }) => {
  return (
    <li>
      <h3>{strAlbum}</h3>
      <p>Artista: {strArtist}</p>
      <p>Stilo: {strStyle}</p>
      <Link to={`/song/${idAlbum}`}>Ver detalles</Link>
    </li>
  );
};

export default Song;