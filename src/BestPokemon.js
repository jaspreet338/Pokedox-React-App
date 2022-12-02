const BestPokemon = (props) => {
  const Pokemon = "Pikachu";
  /*const abilities = ["Anticipation", "Adaptability", "Run-Away"];*/
  return (
    <div>
      <p>My favorite Pokemon is {Pokemon}</p>
      <ul>
        {props.abilities.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
export default BestPokemon;