import {useState, useEffect} from "react";

export function useFetch(currentPage, charOrLocation, searchName) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/${charOrLocation}/?page=${currentPage}&name=${searchName}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, [currentPage, charOrLocation, searchName]);

    return data;
}