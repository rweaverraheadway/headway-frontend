import React, { useState } from "react";
import UrlInputs from "./UrlInputs";

function UrlContainer() {
  const [url, setUrl] = useState("");
  const [slug, setSlug] = useState("");

  const generateLink = () => {
    console.log("generate link");
  };

  return (
    <div>
      <h1>URL Container</h1>
      <UrlInputs url={url} slug={slug} generateLink={generateLink} />
    </div>
  );
}

export default UrlContainer;
