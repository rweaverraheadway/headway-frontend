import React from "react";
import UrlContainer from "./components/UrlContainer.jsx";
import UrlList from "./components/UrlList.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>URL Shortenerf</h1>
      <UrlContainer />
      <UrlList />
    </div>
  );
}
