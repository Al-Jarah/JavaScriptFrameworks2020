// import useEffect
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

// import Axios (or use Fetch)

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [allCharacters, setAllCharacters] = useState([]);
  
    const [image, setImage] = useState(
    "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
    );
  const [name, setName] = useState("");
  useEffect(() => {
    (async () => {
      const response = await axios(
        "https://rickandmortyapi.com/api/character/"
      );
      setAllCharacters(response.data.results);
    })();
  }, []);
  const getCharacter = async characterId => {
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    setImage(response.data.image);
    setName(response.data.name);
  };
  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img
              alt={name}
              src={image}
              height="250"
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select
              id="dropdown"
              onChange={e => getCharacter(e.target.value)}
                >
              <option></option>
                {allCharacters.map(character => (
                <option value={character.id} key={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
