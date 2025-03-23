import React from "react";
import Song from "../Song"
import "./styles.css"

const SearchResults = ({ songs, addToLibrary }) => {
    return (
        <section className="search-results">
            <h2>Resultados de Búsqueda</h2>
            {songs.map((song) => (
                <Song key={song.id} title={song.title} artist={song.artist} duration={song.duration} onAdd={() => addToLibrary(song)} />
            ))}
        </section>
    )
}

export default SearchResults;