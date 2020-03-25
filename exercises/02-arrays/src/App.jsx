import React from "react";
import "./App.css";
import images from "./images/images";

function App() {
  return <div className="App"><h1>{images.map((image,index) => {
    return <img src={image} key={`image-${index}`}/>
  })}</h1></div>;
  
}

export default App;
