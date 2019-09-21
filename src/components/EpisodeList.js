import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {

    const [episodesData, updateEpisodes] = useState([]);

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get("https://rickandmortyapi.com/api/episode/")
          .then(response => {
            updateEpisodes(response.data.results)
          })
          .catch(error => console.log(error))
      }, []); 

    return (
        <section className="episodes-list grid-view">
            {episodesData.map(item => (
                <EpisodeCard data={item} />
            ))}
        </section>
    )
}