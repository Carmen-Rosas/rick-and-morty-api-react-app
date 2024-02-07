export function SearchBar({setCharOrLocation, setSearchName, setCurrentPage}) {
    let input = "";
    function handleChange(e) {
        input = e.target.value;
        setCurrentPage(1);
        setSearchName(input);
    }

    function activateCharButton() {
        setCharOrLocation("character");
        setCurrentPage(1);
    }
    
    function activateLocButton() {
        setCharOrLocation("location");
        setCurrentPage(1);
    }

    return (
        <div className="search">
            <div className="searchBar">
                <input type="search" placeholder="Search..." autoFocus="autofocus" onChange={handleChange}/>
            </div>
            <button className="optionsButton" type="button" onClick={activateCharButton}>Character</button>
            <button className="optionsButton" type="button" onClick={activateLocButton}>Location</button>
        </div>
        
    )
}