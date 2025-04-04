import React, { useState } from "react";
import { AddButton, SearchBarSection } from "./style";


const SearchBar = ({ onSearch }) => {

    const [ nameArtist, setNameArtist] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(nameArtist);
    };

    return (
        <SearchBarSection>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name=""
                    value={nameArtist}
                    onChange={(e) => setNameArtist(e.target.value)}
                    placeholder="Buscar artista..."
                    />
                    <AddButton type="submit">Buscar</AddButton>
            </form>
        </SearchBarSection>
    )
}

export default SearchBar;