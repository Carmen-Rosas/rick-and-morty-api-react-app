import {useState, useEffect} from "react";

export function useFetch(currentPage) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [currentPage]);

    return data;
}