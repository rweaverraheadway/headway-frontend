import React, { useState } from "react";

function UrlInputs({ url, slug, generateLink }) {
  return (
    <div>
      <div className="row">
        <div className="col">
          <p>enter URL</p>
          <input type="text" placeholder="url" />
        </div>
        <div className="col">
          <p>enter Slugg</p>
          <input type="text" placeholder="slug" />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={generateLink}
          >
            Generate Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default UrlInputs;
