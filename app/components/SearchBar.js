
export function SearchBar() {
    return (
        <div className="search">
            <form className="searchBar" role="search">
                <input type="search" placeholder="Search..." autoFocus="autofocus" />
                <button className="searchButton" type="submit">Go</button>  
            </form>
            <button className="optionsButton" type="button">Character</button>
            <button className="optionsButton" type="button">Location</button>
            <button className="optionsButton" type="button">Episode</button>
        </div>
        
    )
}