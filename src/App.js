import React from "react";
import { Route } from 'react-router-dom';
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path = "/" component ={WelcomePage}/>
      <Route path = "/episodes" component ={EpisodeList}/>
      <Route path = "/locations" component ={LocationsList}/>
      <Route path = "/characters" component ={CharacterList}/>
    </main>
  );
}
