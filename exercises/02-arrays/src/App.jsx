import React from "react";
import images from "./images/images"
import "./App.css";

function App() {
  console.log(images)
  return <div className="App"><h1>{images.map((image) => {
    console.log(image)
 return <img src = {image}/>
  })}</h1></div>;
  
}

export default App;
