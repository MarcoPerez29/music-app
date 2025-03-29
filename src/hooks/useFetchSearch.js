import axios from "axios";
import { useEffect, useState } from "react"

const useFetchSearch = (url) => {
    const [dataState, setDataState] = useState({data: [], isLoading: true, error: null});

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                console.log(url);
                const response = await axios.get(url);
                setDataState({data: response.data, isLoading: false, error: null});
                console.log(response.data);
            } catch (error) {
                setDataState({data: [], isLoading: false, error: "Failed to fetch movies"});
            }
        };

        fetchAlbum();
    }, [url]);

    return dataState;
};

export default useFetchSearch;