import React from "react";
import "././css/Header.css"
import back from "./../assets/back.jpg"

const Header =() =>{
return (
    <div className="container-fluid">
        <div className="contenido">
            <div className="titulos ">
                <h1>Telefonos</h1>
                <h2>Gama Alta</h2>
                <p>Súmale una cartera o una funda magnética. O las dos. Y disfruta una carga inalámbrica rápida y eficiente.</p>
            </div>            
            <button className="btn btn-secondary px-5 fw-bold ">Ver Más</button>
       </div>
       <div className="imagen">
        <img src={back} alt="" />
       </div> 
    </div>
)

}

export default Header