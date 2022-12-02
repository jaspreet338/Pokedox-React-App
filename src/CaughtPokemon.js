import React, { useState } from "react";
const CaughtPokemon = (props) => {
  //const arrayPokemon = ["piko", "pika", "pike", "piki"];
  //const random = Math.floor(Math.random() * arrayPokemon.length);
  const [caught, setCaught] = useState([]);
  const[pokemonNameInput, setPokemonNameInput] = useState("");
  function catchPokemon () {
    setCaught(caught.concat(pokemonNameInput));
  }
  function handleInputChange(event){
    setPokemonNameInput(event.target.value);
  }
  return (
    <div>
      <input type = "text" value = {pokemonNameInput} onChange = {handleInputChange}/>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <button onClick={catchPokemon}>Click me</button>
      <ul>
        {caught.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
