import React, { useState } from "react";
import UrlInput from "./UrlInput";
import UrlEntry from "./UrlEntry";

function UrlContainer() {
  const [count, setCount] = useState(0);

  return (
    <div class="container">
      <h1>URL Container</h1>
      <UrlInput />
      <UrlEntry />
    </div>
  );
}

export default UrlContainer;
