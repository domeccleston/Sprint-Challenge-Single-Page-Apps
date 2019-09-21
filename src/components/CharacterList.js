import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import { Search } from "semantic-ui-react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, updateCharacter] = useState([]);
  const [searchState, updateSearch] = useState('');

   useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        if (searchState === "") {
          updateCharacter(response.data.results);
        }
        else {
          const searchResults = response.data.results.filter(item => item.name.toLowerCase().includes(searchState.toLowerCase()));
          updateCharacter(searchResults)
        }
      })
      .catch(error => console.log(error))
  }, [searchState]);

  return (
    <>
    <SearchForm data={searchState} setter={updateSearch}/>
    <h3>{searchState}</h3>
    <section className="character-list grid-view">
      {characterData.map(item => (
        <CharacterCard data={item} />
      ))}
    </section> 
    </>
  );
}
