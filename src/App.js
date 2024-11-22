import { useEffect, useState } from "react";
import Person from "./person";

// Write your API key here:
const APIkey = "9f5e86300478ea6d65335e21698ee5f2";

const QUERY = "spielberg";

function App() {


  const [person, setPersons] = useState([]);
  useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/person?query=${QUERY}&api_key=${APIkey}`)
        .then(res => res.json())
        .then(data => setPersons(data.results));
    }, 
    []);


    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!person || person.length === 0) {
      return <p>No results available.</p>;
    }
  
    const selectedPerson = person[selectedIndex];



  return (
    <div>
      <Person person={selectedPerson} />
     <div>
        {person.map((person, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: selectedIndex === index ? "#76d164" : "#ccc",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.5s",
            }}
          >
            {person.name}
          </button>
        ))}
      </div>
    </div> 

  );
 }
  
  export default App; 
  