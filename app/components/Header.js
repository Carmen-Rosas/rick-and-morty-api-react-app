
export function Header({title}) {
    return (
        <header className="homeHeader">
            <img src="./favicon.ico" className="headerIcon"></img>
            <h1 className="homeTitle">{title}</h1>  
        </header>
    
    )
    
}