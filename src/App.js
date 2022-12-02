import React from "react";
import Logo from "./Logo";
//import "./App.css";

import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";

const App = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const logWhenClicked = () => {
    console.log("heloo");
  };
  return (
    <div>
      <Logo appName={"Asees's Pokedox"} click={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
    </div>
  );
};

/**/
  export default App;