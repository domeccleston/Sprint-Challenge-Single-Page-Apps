import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from 'axios';

export default function LocationsList() {

  const [locationData, updateLocations] = useState([]);

  /* useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        updateLocations(response.data.results)
      })
      .catch(error => console.log(error))
  }, []); */

  return (
      <section className="locations-list grid-view">
          {locationData.map(item => (
              <LocationCard data={item} />
          ))}
      </section>
  )
}
