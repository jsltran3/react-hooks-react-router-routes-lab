import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map((directors) => (
    <div key={directors.name}>
      <h2>Name: {directors.name}</h2> 
      <p>Movies:</p>
        <ul>
          {directors.movies.map((movies) => (
            <li key={movies}>{movies}</li>
          ))}
        </ul>
    </div>
  ))

  return (
  <div>
    <h1>Directors Page</h1>
    {directorsList}
  </div>
  );
}

export default Directors;

