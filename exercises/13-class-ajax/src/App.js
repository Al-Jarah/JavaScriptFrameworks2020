import React, { Component } from "react";
import axios from "axios";
import "./App.css";

/** Convert me into a class component  */

// function App() {
//   return (
//     <div className="App">
//       <h1>Ron Swanson</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    quote: "Loading...",
  };

  componentDidMount() {
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => {
        this.setState({ quote: response.data[0] });
      })
      .catch(() => {
        this.setState({ quote: "Error loading API data" });
      });
  }
  render() {
    return (

      <body className="bg-warning text-center">
        <h1>Ron Swanson</h1>
        <img
          src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
          alt=""
          width="450"
          height="423"
          class="mt-4"
        />
        <div class="container">
          <blockquote
            id="quote"
            class="blockquote bg-dark text-white border-0 mb-4"
          >
            {this.state.quote}
          </blockquote>
        </div>
      </body>
    );
  }
}

export default App;
