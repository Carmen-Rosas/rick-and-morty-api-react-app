import github from "../../public/github.svg"

export function Footer() {
    return (
        <footer>
            <h3>Created by Carmen Rosas</h3>
            <a href="https://github.com/Carmen-Rosas">
                <img src={github} alt="github"></img>
            </a>
        </footer>
    );
}