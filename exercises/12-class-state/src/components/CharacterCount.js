import React, { Component } from "react";

class CharacterCount extends Component {
  state = {
    charCount: 0,
  };

  render() {
    return (
      <div className="container mt-4 h1">
        <textarea
          onChange={(e) => this.setState({ charCount: e.target.value.length })}
        ></textarea>
        <p>Character Count {this.state.charCount}</p>
      </div>
    );
  }
}

export default CharacterCount;
