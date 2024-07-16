import React, { useState } from 'react';
import { ContentOfCards } from "./Content";

export const Cards = (props) => {
    const { listOfProjects } = props;
    const [selectedProject, setSelectedProject] = useState();
  
    const handleProjectSelect = (project) => {
      setSelectedProject(project);
    };
  
    return (
      <div className="container mt-5 pb-5">
        <div className="row row-cols-1 row-cols-md-3 g-5 ">
          {listOfProjects?.map((el) => (
            <div key={el.id} className="col">
              <div className="card">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                  className="card-img-top p-4"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.description}</p>
                  <button
                    className="btn btn-outline-warning"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                    onClick={() => handleProjectSelect(el)}
                  >
                    About Project
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{el.tools}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ContentOfCards selectedProject={selectedProject} />
      </div>
    );
  };
