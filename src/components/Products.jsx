import React from "react";
import "./css/Products.css";

const Products = ({ image, title, content, category, price, handleNewProduct, id }) => {
  let cuotas = 24;
  let diferido = price / cuotas;

  return (
    <div className="col-12 col-md-3 my-2 ">
      <div className="card">
        <img src={image} className="card-img-top" />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-title text-secondary ">
            <small>{category}</small>
          </h6>
          <p className="card-text">{content}</p>
          <div className="d-flex align-items-center justify-content-around w-100">
            <h2 className="fw-bold text-success ">${price}</h2>
            <div className="creditoDirecto ">
              <p>
                Credito Directo
              </p>
              <p > 24 Cuotas</p>
              <h3>${diferido.toFixed(2)}</h3>
            </div>
          </div>
          <button href="#" className="btn btn-primary my-3 w-100"  onClick={()=>{
              handleNewProduct({image, title, content, category, price, id})}}>
            <i className="bi bi-cart-plus-fill"></i> Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Products;
