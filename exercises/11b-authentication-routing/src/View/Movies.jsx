import React, { useEffect, useState, useContext } from "react";
import { CookieContext } from "../Context/SessionContext";
import { destroySessionCookie } from "../utils/Cookies.util";
import axios from "axios";

export const Movies = ({ history }) => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  /**
   * Getting the token (UUID) we stored in the Context API.
   */
  const [uuid] = useContext(CookieContext);

  useEffect(() => {
    /**
     * The API should not give you back any users unless you are logged in.
     * To prove that you are logged in, you must pass the token (UUID) in the API.
     */
    axios
      .get("http://localhost:7000/cookie/movies", {
        /**
         * We could use the "Authorize" header like we did in the local storage example,
         * but I'm showing you an alternative way of doing this,
         * where you pass the token as a query parameter.
         */
        params: {
          id: uuid, // Try commenting me out and see what happens when no token is passed
        },
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resp) => setMovies(resp.data.data))
      .catch((err) => {
        console.error(err);
        setErrorMessage("Oh no! An unexpected error occurred.");
      });
  }, [uuid]);

  return (
    <div className="container mt-2 mb-5">
      <div className="d-flex justify-content-between">
        <h1 className="h2">You are logged in!</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            console.log({ history });
            destroySessionCookie();
            history.push("/");
          }}
        >
          Logout
        </button>
      </div>
      <p>
        Notice that when you refresh the page, you are still logged in. That's
        because the token is stored inside of a cookie.
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
};
