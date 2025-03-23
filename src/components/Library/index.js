import React from "react";
import Song from "../Song";
import "./styles.css";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Mi Biblioteca</h2>
      {songs.length === 0 ? <p>No se han agregado canciones a tu biblioteca!.</p> :
        songs.map((song) => <Song key={song.id} title={song.title} artist={song.artist} duration={song.duration} />)}
    </div>
  );
};

export default Library;