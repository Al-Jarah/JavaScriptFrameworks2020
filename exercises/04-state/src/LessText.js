import React, { useState } from "react";


function LessText({ text, maxLength }) {
  const [less, setLess] = useState(true);
  function truncateText() {
    return text.substring(0, maxLength);
  }
  return (
    <div>
      <h1>{less ? truncateText() : text}</h1>
      <button onClick={() => setLess(false)}>Read More</button>
      <button onClick={() => setLess(true)}>Read Less</button>
    </div>
  );
}

export default LessText;