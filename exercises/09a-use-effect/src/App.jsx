// Import useEffect here
import React, { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)
import axios from "Axios";
function App() {
  /**
   * Set up your state
   */
const [quote, setQuote] = useState('');
const [loading, setIsLoading] =useState(true);
const [error, setHasError] = useState(false);
  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
        );
        setQuote(response.data[0]);
      } 
      catch (err) {
        console.error(err);
        setHasError(true);
      }
      setIsLoading(false);
    })();
  }, []);
  return (
    <body class="bg-warning text-center">
    <img
      src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
      alt=""
      width="450"
      height="423"
      class="mt-4"
    />
    <div class="container">
      {loading && <div>Loading...</div>}
      {hasError && <div cla>Oops! An unsexspected error has occured.</div>}
      <blockquote
        id="quote"
        class="blockquote bg-dark text-white border-0 mb-4"
      >
        {response}
      </blockquote>
    </div>
  </body>
  );
}

export default App;
