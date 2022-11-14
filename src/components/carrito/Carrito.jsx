import React ,{useState} from "react";
import "./carrito.css"

const Carrito = ({title, description, category, image, id, price, rating})=> {

    let carrito = [];  
  
return (
<div>

    <div className="carritos">
    <div class="container">
    <div id="carrito" class="formLogin">
    <div class="input__box">
        {/* <!-- Elementos generados a partir del JSON --> */}
        {/* <!-- Carrito --> */}
        <div class="col-sm-4">
            <div scope="col" className="jpy">Carrito</div>
            <p>title: {title}</p>
            <p>category: {category}</p>
            <p class="information">price: {price}</p>
            {/* <p class="information">{description}</p> */}
            <img src={image} id="product" class="input__box">{image}</img>
            <ul id="carrito" class="list-group"></ul>
            {/* <!-- Precio total --> */}
            <p class="forget">Total: <span id="total">{price}</span>$</p>
            <button id="boton-vaciar" class="btn btn-danger">- Vaciar -</button>
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
)
}

export default Carrito