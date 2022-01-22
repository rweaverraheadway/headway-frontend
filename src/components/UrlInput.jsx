import React, { useState } from "react";

function UrlInput() {
  return (
    <div>
      <span>
        <p>enter URL</p>
        <input type="text" placeholder="url" />
        <p>enter Slug</p>
        <input type="text" placeholder="slug" />
      </span>
    </div>
  );
}

export default UrlInput;
