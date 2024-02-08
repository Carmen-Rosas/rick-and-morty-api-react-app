
export function Header({ title }) {
    return (
        <>
            <header>
                <img src="/img/favicon.ico" className="headerIcon" alt="rick-avatar"></img>
                <h1 className="homeTitle">{title}</h1>
            </header>
            <div className="line"></div>
        </>



    )

}