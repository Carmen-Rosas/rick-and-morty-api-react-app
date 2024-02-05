
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
        <div className="characterCard">
            <div className="containerImage">
              <img src={character.image} className="characterImage"></img>  
            </div>
            
            <div className="container">
                <div className="section1">
                    <h3 className="characterName"><b>{character.name}</b></h3>
                    <div className={statusIcon}></div>
                    <span className="statusSpeciesSpan">{character.status} - {character.species}</span>  
                </div>
                <div className="section2">
                    <span className="originSpan">Origin:</span>
                    <h4 className="originName">{character.origin.name}</h4>
                </div>
            </div>
        </div>
    );
}