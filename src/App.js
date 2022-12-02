import React from "react";
import Logo from "./Logo";
//import "./App.css";

import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMoves from "./PokemonMoves";

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
      <PokemonMoves />
    </div>
  );
};

/**/
  export default App;