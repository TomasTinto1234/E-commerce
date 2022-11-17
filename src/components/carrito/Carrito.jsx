import React, { useState } from "react";
import "./carrito.css";

const Carrito = ({title, description, category, image, id, price, rating,}) => {

  const [visible, setVisible] = useState(false)
  const products = document.querySelector("products")
console.log(products)
  //   const aitems = [title, description, category, image, id, price, rating]
  //   console.log(aitems)
  //   const carrito = [];
  //   console.log(carrito)

  //   const items = () => {
  //   if (id) {
  //       carrito.push(aitems);
  //     return carrito;
  //   }
  //   return items
  // };

  return (
    <div id="carrito">
      <div className="carritos">
        <div className="container">
          <div id="carrito" className="formLogin">
            <div className="input__box">
              {/* <!-- Elementos generados a partir del JSON --> */}
              {/* <!-- Carrito --> */}
              <div className="col-sm-4">
                <h1 scope="col" className="jpy">
                  Carrito
                </h1>
                <p>title: {title}</p>
                <p>category: {category}</p>
                <p className="information">price: {price}</p>
                {/* <p class="information">{description}</p> */}    
                <img src={image} id="product" className="input__box">
                  {image}
                </img>
                <ul id="carrito" className="list-group"></ul>
                {/* <!-- Precio total --> */}
                <p className="forget">
                  Total: <span id="total">{price}</span>$
                </p>
                <button id="boton-vaciar" className="btn btn-danger">
                  - Vaciar -
                </button>
              </div>
            </div>
          </div>

          {/* <div class="container">
    <div class="row">
    <div class="col-sm-8 row"> logo</div>
    <div class="h5">Shoping Cart</div>
    <div class="col-sm-4">
            <button class="btn btn-danger"> vaciar carrito</button>
            <button class="btn btn-danger">regresar</button>
        </div>
        </div>
        <p class="btn btn-danger">carrito vacio</p>
        <div>
        <div class="text-right"><p>Total {price}$</p></div>
        <div class="btn btn-danger">continuar</div>
        </div>
    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Carrito;
