import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function LoggedInContent({logout}) {
  const [movies, setMovies] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Make an AJAX request to http://localhost:7000/jwt/movies to get a list of movies.
   * Be sure to provide the token in the AJAX request.
   */
useEffect (() => {
  // using local storage for token as token
  const token = localStorage.getItem('token');
  // using cookie as token
  const uuid = Cookies.get('tokenCookie');
  // alert(token + "\n" + tokenCookie);

   axios({
    url: "http://localhost:7000/jwt/movies",
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        // use this for doing jwt token
        Authorization: `Bearer ${token}`
    },
    // use this for doing cookie token
    params: {
      id: uuid
    }
  })
    .then(response => setMovies(response.data))
    .catch(err => console.log(err))
    }, []);

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        {/* Make this button functional */}
        <button className="btn btn-primary" onClick={logout}>Logout</button>
      </div>
      <p>
        Notice that when you refresh the page, you are still logged in. That's
        because the token is stored in local storage.
      </p>
      <p>
        To delete the token, press <code>command+option+i</code> for Mac or{" "}
        <code>ctrl+shift+i</code> for Windows to open the Developer Tools. Click
        on the "Applications" tab in Chrome (or the "Storage" tab in Firefox).
        You will need to refresh the page after you delete the token.
      </p>
      {Object.values(movies).map((movie, idx) => {
        return (
          <div className="media mb-3" key={`movie-${idx}`}>
            <img
              src={movie.poster}
              alt={movie.title}
              width="150"
              height="220.875"
              className="mr-3"
            />
            <div className="media-body">
              <h2 className="h3">{movie.title}</h2>
              <p>{movie.synopsis}</p>
            </div>
          </div>
        );
      })}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default LoggedInContent;