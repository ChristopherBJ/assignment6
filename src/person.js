import React from "react";


function Person({person}) {
    if (!person) {
      return <p>Loading...</p>;
    }
    const {
      name,
      profile_path,
      known_for_department,
      known_for,
    } = person;
    return (
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={`${name}`} style={{width: "auto", height: "400px"}}/>
        <h3> {name} </h3>
        <p>Occupation: {known_for_department}</p>
        <p>Known for:</p>
        <ul>
          {known_for.map((work, index) => (
            <li key={index}>{work.title}, ({work.release_date}) <ul>{work.overview}</ul></li>
          ))}
        </ul>
      </div>
    );
  }
export default Person;