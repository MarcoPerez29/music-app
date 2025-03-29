import React, { useState } from "react";


const SearchBar = ({ onSearch }) => {

    const [ nameArtist, setNameArtist] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(nameArtist);
    };

    return (
        <section className="search-bar">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name=""
                    value={nameArtist}
                    onChange={(e) => setNameArtist(e.target.value)}
                    placeholder="Buscar artista..."
                    />
                    <button type="submit">Buscar</button>
            </form>
        </section>
    )
}

export default SearchBar;