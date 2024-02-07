"use client";
import "./page.css";
import "./components/components.css";
import { useFetch } from "./useFetch";
import { useState, useEffect } from "react";
import { CharacterCards, LocationCards } from "./components/Cards";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Footer } from "./components/Footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [charOrLocation, setCharOrLocation] = useState("character");
  const [searchName, setSearchName] = useState("");

  const data = useFetch(currentPage, charOrLocation, searchName);
  
  function handleClickPrev() {
    if (data.info.prev != null)
      setCurrentPage(currentPage - 1);
  };

  function handleClickNext() {
    if (data.info.next != null)
      setCurrentPage(currentPage + 1);
  };

  let pageButtons = "";
  if (data.info.prev == null || data.info.next == null)
    pageButtons = "notVisibleButtons";

  return (
    <>
      <Header title="Rick and Morty" />
      <div className="line"></div>
      <div className="space">
        <SearchBar setCharOrLocation={setCharOrLocation} setSearchName={setSearchName} setCurrentPage={setCurrentPage}/>
      </div>
      <div className="homeCard">
        {data?.results.map((element) => (
          <div key={element.id}>
            {charOrLocation == "character" ?
              (<CharacterCards character={element} />) :
              (<LocationCards location={element} />)
            }
          </div>
        ))}
      </div>
      <div className="pageButtons">
        <button className={pageButtons} onClick={handleClickPrev}>Previous</button>
        <button className={pageButtons} onClick={handleClickNext}>Next</button>
      </div>
      <Footer />
    </>
  );
}
