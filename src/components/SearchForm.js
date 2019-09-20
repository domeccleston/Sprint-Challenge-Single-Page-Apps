import React, { render, useState } from "react";
import { Link } from 'react-router-dom';
import CharacterList from './CharacterList'; 


export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  }

  return (
    <section className="search-form">
      <form onSubmit={(event) => {
        event.preventDefault();
        console.log(name);
        }}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
