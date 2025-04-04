import React, { useState } from "react";
import Song from "../Song"
import SearchBar from "../SearchBar";
import useFetchSearch from "../../hooks/useFetchSearch"
import { ResultInfo, ResultList, ResultSection } from "./style";

const SearchResults = () => {
    const [artist, setArtist] = useState("Coldplay");
    const { data, isLoading, error } = useFetchSearch(
        `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artist}`
        
    );
    return (
        <ResultSection>
            <SearchBar onSearch={setArtist}/>
            {isLoading && <ResultInfo>Cargando...</ResultInfo>}
            {error && <ResultInfo>Hubo un problema al cargar los datos. Intenta nuevamente</ResultInfo>}
            {data.album && (
                <ResultList>
                    {data.album.map((album) => (
                        <Song key={album.idAlbum} {...album} />
                    ))}
                </ResultList>
            )}
        </ResultSection>
    )
}

export default SearchResults;