"use client";
import "./page.css";
import "./components/components.css";
import {useFetch} from "./useFetch";
import {CharacterCards} from "./components/Cards";
import {Header} from "./components/Header";
import {SearchBar} from "./components/SearchBar";
import {Footer} from "./components/Footer";

export default function Home() {
  const characters = useFetch("https://rickandmortyapi.com/api/character");
  const locations = useFetch("https://rickandmortyapi.com/api/location");

  return (
    <>
    <Header title="Rick and Morty"/>
    <div className="line"></div>
    <div className="space">
      <SearchBar/>
    </div>
    <div className="homeCard">
        {characters?.results.map((character) => (
          <div key={character.id}>
            <CharacterCards character={character}/>
          </div>
        ))}
    </div>
    <Footer/>
    </>
  );
}
