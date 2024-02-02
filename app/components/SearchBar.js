
export function SearchBar() {
    return (
        <div className="search">
            <form className="searchBar" onsubmit="" role="search">
                <input type="search" placeholder="Search..." autofocus="autofocus" />
                <button className="searchButton" type="submit">Go</button>  
            </form>
            <button className="optionsButton">Character</button>
            <button className="optionsButton">Location</button>
            <button className="optionsButton">Episode</button>
        </div>
        
    )
}