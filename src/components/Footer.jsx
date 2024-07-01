import React from "react";

function Footer() {
  return (
    <>
      <footer className="py-3  text-bg-dark">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2  text-white">
              Favorite
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2  text-white">
              Details
            </a>
          </li>
        </ul>
        <p className="text-center  text-white ">© 2024 Company, Inc</p>
      </footer>
    </>
  );
}

export default Footer;
