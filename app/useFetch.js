import {useState, useEffect} from "react";

export function useFetch(currentPage, charOrLocation) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/${charOrLocation}/?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [currentPage, charOrLocation]);

    return data;
}