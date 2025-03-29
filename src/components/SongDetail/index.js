import { useParams } from "react-router-dom";
import useFetchSearch from "../../hooks/useFetchSearch";

const SongDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchSearch(
    `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`
  );

  return (
    <div className="song-detail">
        {loading && <p>Cargando...</p>}
        {error && <p>Error al cargar los datos.</p>}
        {data.album && (
            <div>
                <img 
                    alt={`${data.album[0].strAlbumCDart} Album Poster`}
                    src={data.album[0].strAlbumCDart} 
                    width="200px"/>
                <h2>{data.album[0].strAlbum}</h2>
                <p>Artista: {data.album[0].strArtist}</p>
                <p>Año: {data.album[0].intYearReleased}</p>
                <p>{data.album[0].strDescriptionEN}</p>
            </div>
        )}
    </div>
  );
};

export default SongDetail;