//import React from "react";
import Avataar from "./Avataar";
const Title = (props) => <h1>{props.appName}</h1>;

const Logo = (props) => {

  console.log(props);
  return (
    <header>
      <Title appName={props.appName} fabulous="true" />
      <Avataar />
      <button onClick={props.click}>catch</button>
    </header>
  );
};

export default Logo;