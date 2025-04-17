

import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {github && (
        <p>
          <a href={github} target="_blank" rel="noreferrer">
            {github}
          </a>
        </p>
      )}
      {linkedin && (
        <p>
          <a href={linkedin} target="_blank" rel="noreferrer">
            {linkedin}
          </a>
        </p>
      )}
    </div>
  );
}

export default Links;
