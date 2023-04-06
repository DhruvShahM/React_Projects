import React, { useContext } from "react";
import { UserData } from "../contexts/GlobalContext";
import Settings from "./Settings";

function Home() {

    const {name,age}=useContext(UserData);


  return (
    <div>
      <h1>My name is {name}</h1>
      <h2>My age is {age}</h2>
      <Settings/>
    </div>
  );
}

export default Home;