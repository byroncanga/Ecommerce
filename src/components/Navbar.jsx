import React from "react";
import "././css/Navbar.css"
import logo from "./../assets/logo.png"


const Navbar = ({cart}) => {
  return (
    <div className="container-fluid bgNavbar">
      <nav className="container navbar navbar-expand-lg p-3 ">
        <div className="container-fluid">
          <img className="logo" src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tienda
                </a>
              </li>              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Empresa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Contactos
                </a>
              </li>
            </ul>
            <h5 className=""><i class="bi bi-cart4"></i> {cart}</h5>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
