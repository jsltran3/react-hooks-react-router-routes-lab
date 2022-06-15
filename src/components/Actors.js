import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsList = actors.map((actors) => (
    <div key={actors.name}> 
      <h3>Name: {actors.name}</h3>
      Movies:
      <ul>
        
        {actors.movies.map((movie) => (
          <li key={movie}>
            {movie}
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
}

export default Actors;
