import React from "react";

export const ContentOfCards = (props) => {
  const { selectedProject } = props;

  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          {selectedProject?.name}
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body d-flex flex-column">
        <p>{selectedProject?.longDescription}</p>
        <div className="d-grid gap-2 col-6 mx-auto">
          <a
            className="btn btn-light"
            href={selectedProject?.repository}
            role="button"
            target="_blank"
          >
            Github Repository
          </a>
          <a
            className="btn btn-success"
            href={selectedProject?.live}
            role="button"
            target="_blank"
          >
            Live Website
          </a>
        </div>
      </div>
    </div>
  );
};
