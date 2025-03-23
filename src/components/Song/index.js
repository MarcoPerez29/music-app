import React from "react";
import "./styles.css"

const Song = ({ title, artist, duration, onAdd }) => {
    return (
        <div className="song">
            <h3>{title}</h3>
            <p>{artist}</p>
            <p>{duration}</p>
            {onAdd && <button onClick={onAdd}>Agregar a mi biblioteca</button>}
        </div>
    )
}

export default Song;