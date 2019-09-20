import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import { Search } from "semantic-ui-react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, updateCharacter] = useState([]);

   useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        updateCharacter(response.data.results)
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <>
    <SearchForm />
    <section className="character-list grid-view">
      {characterData.map(item => (
        <CharacterCard data={item} />
      ))}
    </section> 
    </>
  );
}
