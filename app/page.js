"use client";
import "./page.css";
import "./components/components.css";
import { useFetch } from "./useFetch";
import { useState, useEffect } from "react";
import { CharacterCards } from "./components/Cards";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Footer } from "./components/Footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const characters = useFetch(currentPage);
  
  function handleClickPrev() {
    if (characters.info.prev != null)
      setCurrentPage(currentPage - 1);
  };

  function handleClickNext() {
    if (characters.info.next != null)
      setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Header title="Rick and Morty" />
      <div className="line"></div>
      <div className="space">
        <SearchBar />
      </div>
      <div className="homeCard">
        {characters?.results.map((character) => (
          <div key={character.id}>
            <CharacterCards character={character} />
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleClickPrev}>Previous</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
      <Footer />
    </>
  );
}
