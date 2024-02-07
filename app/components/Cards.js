
export function CharacterCards({character}) {
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
        <div className="card">
            <div className="containerImage">
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
                    <h4>{character.origin.name}</h4>
                </div>
            </div>
        </div>
    );
}

export function LocationCards({location}) {
    return (
        <div className="card">
        <div className="containerImage">
          <img src={location.image} className="cardImage"></img>  
        </div>
        
        <div className="container">
            <div className="section1">
                <h3 className="elementName"><b>{location.name}</b></h3>
                <span>{location.dimension}</span>
            </div>
            <div className="section2">
                <span>Type:</span>
                <h4>{location.type}</h4>
            </div>
        </div>
    </div>
    )
}