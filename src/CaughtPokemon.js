import React, { useState } from "react";
const CaughtPokemon = (props) => {
  const arrayPokemon = ["piko", "pika", "pike", "piki"];
  const random = Math.floor(Math.random() * arrayPokemon.length);
  const [caught, setCaught] = useState([]);
  const catchPokemon = () => {
    setCaught(caught.concat(arrayPokemon[random]));
  };
  return (
    <div>
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
