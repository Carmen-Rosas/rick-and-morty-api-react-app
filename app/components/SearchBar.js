
export function SearchBar({setCharOrLocation}) {
    
    function activateCharButton() {
        setCharOrLocation("character");
      }
    
      function activateLocButton() {
        setCharOrLocation("location");
      }

    return (

        <div className="search">
            <form className="searchBar" role="search">
                <input type="search" placeholder="Search..." autoFocus="autofocus" />
                <button className="searchButton" type="submit">Go</button>  
            </form>
            <button className="optionsButton" type="button" onClick={activateCharButton}>Character</button>
            <button className="optionsButton" type="button" onClick={activateLocButton}>Location</button>
        </div>
        
    )
}