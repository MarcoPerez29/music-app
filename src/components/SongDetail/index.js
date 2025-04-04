import { useParams } from "react-router-dom";
import useFetchSearch from "../../hooks/useFetchSearch";
import { DetailArticle, DetailImage, DetailInfo, DetailTitle } from "./style";

const SongDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetchSearch(
    `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`
  );

  return (
    <DetailArticle>
        {loading && <p>Cargando...</p>}
        {error && <p>Error al cargar los datos.</p>}
        {data.album && (
            <div>
                <DetailImage 
                    alt={`${data.album[0].strAlbumCDart} Album Poster`}
                    src={data.album[0].strAlbumCDart} 
                />
                <DetailTitle>{data.album[0].strAlbum}</DetailTitle>
                <DetailInfo>Artista: {data.album[0].strArtist}</DetailInfo>
                <DetailInfo score={data.album[0].intYearReleased}>Año: {data.album[0].intYearReleased}</DetailInfo>
                <DetailInfo>{data.album[0].strDescriptionEN}</DetailInfo>
            </div>
        )}
    </DetailArticle>
  );
};

export default SongDetail;