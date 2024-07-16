import React from "react";

export const Footer = () => {
  return (
    <div className="container-fluid p-0">
      <footer className="bg-dark text-center text-white bg-opacity-75">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-2"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-2"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-2"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-2"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-2"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-2"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "black" }}>
          © {new Date().getFullYear()} Copyright
        </div>
      </footer>
    </div>
  );
};
