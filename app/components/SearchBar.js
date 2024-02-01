
export function SearchBar() {
    return (
        <form className="searchBar" onsubmit="" role="search">
            <input type="search" placeholder="Search..." autofocus="autofocus" />
            <button className="searchButton" type="submit">Go</button>  
        </form>
    )
}