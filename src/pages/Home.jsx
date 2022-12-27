import React from "react";
import NavBar from "../Components/NavBar";

function Home() {
  return (
    <div className="HomePage">

    <NavBar/>
    <div className="Home">
      <h2 className="WelcomeMessage">Welcome</h2>
      <h3 className="WelcomeMessage2">Know where you want to go but dont know how to get there?</h3>
      <h3 className="WelcomeMessage3">That's where We Come In</h3>
    </div>

    </div>
  )
}

export default Home;
