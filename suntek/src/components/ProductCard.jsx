

import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card border-secondary" style={{ width: '18rem' }}>
      <div className="position-relative">
        {/* Imagen con efecto zoom al pasar el cursor */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="card-img-top zoom-img" 
          style={{  width: "250px", 
            height: "250px", 
            objectFit: "contain", 
            display: "block", 
            margin: "auto", 
            transformOrigin: "center" }} 
        />
        <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
          Oferta
        </span>
      </div>
      <div className="card-body">
        <p className="card-text text-uppercase text-primary">Electrónica</p>
        <h5 className="card-title">{product.name}</h5>
        <div>
          <span className="text-warning">★★★★</span>
          <span className="text-muted ms-2">(4.0)</span>
        </div>
        <p className="text-muted text-decoration-line-through">
          {parseFloat(product.price.replace('$', '')) * 1.2}$
        </p>
        <p className="text-primary fw-bold">{product.price}</p>
        <a href="#" className="btn btn-dark">Comprar</a>
      </div>
    </div>
  );
};

export default ProductCard;
