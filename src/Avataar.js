const Avataar = () => {
  const logWhenClicked = () => {
  console.log("heloo");
  };
  return (
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" onClick={logWhenClicked}
      alt=""
    />
  );
};
export default Avataar;