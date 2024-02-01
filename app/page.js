"use client";
import "./page.css";
import "./components/components.css";
import {useFetch} from "./useFetch";
import {CharacterCards} from "./components/Cards";
import {Header} from "./components/Header";
import {SearchBar} from "./components/SearchBar";

export default function Home() {
  const {data} = useFetch("https://rickandmortyapi.com/api/character");

  return (
    <>
    <Header title="Rick and Morty"/>
    <div className="line"></div>
    <div className="space">
      <SearchBar/>
    </div>
    <div className="homeCard">
        {data?.results.map((character) => (
          <div key={character.id}>
            <CharacterCards character={character}/>
          </div>
        ))}
    </div>
    </>
  );
}
