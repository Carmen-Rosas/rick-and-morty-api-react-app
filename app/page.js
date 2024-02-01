"use client";
import "./page.css";
import "./components/components.css"
import {useFetch} from "./useFetch";
import {CharacterCards} from "./components/Cards";

export default function Home() {
  const {data} = useFetch("https://rickandmortyapi.com/api/character");

  return (
    <>
      <header>
        <img src="./favicon.ico" className="headerIcon"></img>
        <h1>Rick and Morty info</h1>
      </header>
      <hr></hr>
      <div className="space"></div>
      <div className="homeCard">
          {data?.results.map((character) => (
            <div key={character.id}>{CharacterCards(character)}</div>
          ))}
      </div>
    </>
  );
}
