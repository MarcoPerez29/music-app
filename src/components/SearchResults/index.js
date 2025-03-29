import React, { useState } from "react";
import Song from "../Song"
import "./styles.css"
import SearchBar from "../SearchBar";
import useFetchSearch from "../../hooks/useFetchSearch"

const SearchResults = () => {
    const [artist, setArtist] = useState("Coldplay");
    const { data, isLoading, error } = useFetchSearch(
        `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artist}`
        
    );
    return (
        <section className="search-results">
            <SearchBar onSearch={setArtist}/>
            {isLoading && <p>Cargando...</p>}
            {error && <p>Hubo un problema al cargar los datos. Intenta nuevamente</p>}
            {data.album && (
                <ul>
                    {data.album.map((album) => (
                        <Song key={album.idAlbum} {...album} />
                    ))}
                </ul>
            )}
        </section>
    )
}

export default SearchResults;