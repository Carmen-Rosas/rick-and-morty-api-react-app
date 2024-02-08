import { useState } from "react";

export function CharacterCards({ character }) {
    const [clicked, setClicked] = useState(true);
    
    function toggleClick() {
        setClicked(!clicked);
    }
    
    let statusIcon = "";

    switch (character.status) {
        case "Alive":
            statusIcon = "alive";
            break;
        case "Dead":
            statusIcon = "dead";
            break;
        default:
            statusIcon = "unknown";
            break;
    }

    return (
        <>
            {clicked ? 
            (<div className="card" onClick={toggleClick}>
                <div>
                    <img src={character.image} className="cardImage"></img>
                </div>

                <div className="container">
                    <div className="section1">
                        <h3 className="elementName"><b>{character.name}</b></h3>
                        <div className={statusIcon}></div>
                        <span>{character.status} - {character.species}</span>
                    </div>
                    <div className="section2">
                        <span>Origin:</span>
                        <h4>{character.origin?.name}</h4>
                    </div>
                </div>
            </div>) : 
            <div className="cardMax" onClick={toggleClick}>
                <div className="containerMaxImage">
                    <img src={character.image} className="cardImage"></img>
                </div>

                <div className="container">
                    <div className="section1">
                        <h3 className="elementName"><b>{character.name}</b></h3>
                        <div className={statusIcon}></div>
                        <span>{character.status} - {character.species} {character.type}</span>
                    </div>
                    <div className="section2">
                        <span>Origin:</span>
                        <h4>{character.origin?.name}</h4>
                    </div>
                    <div className="section2">
                        <span>Gender:</span>
                        <h4>{character.gender}</h4>
                    </div>
                    <div className="section2">
                        <span>Last known location:</span>
                        <h4>{character.location?.name}</h4>
                    </div>
                    <div className="section2">
                        <span>Episodes:</span>
                        <h4>{character.episode.length}</h4>
                    </div>
                </div>
            </div>
            }

        </>

    );
}

export function LocationCards({ location }) {
    return (
        <div className="locationCard">
            <div className="container">
                <div className="section1">
                    <h3 className="elementName"><b>{location.name}</b></h3>
                    <span>{location.dimension}</span>
                </div>
                <div className="section3">
                    <div className="locationType">
                        <span>Type:</span>
                        <h4>{location.type}</h4>
                    </div>
                    <div>
                        <span>Residents:</span>
                        <h4>{location.residents?.length}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}