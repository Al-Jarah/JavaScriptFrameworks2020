import React from "react";
import "./App.css";
import LessText from "./LessText";
import CharacterCount from "./CharacterCount"

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 1 - Less Text</h2>
        {/*  LessText with props  */}
        <LessText text={"hello"} maxLength={2} 

        />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {/*  CharacterCount  */}
          <CharacterCount/>
        </div>
      </div>
    </>
  );
}

export default App;
