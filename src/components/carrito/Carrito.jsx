import React ,{useState} from "react";

const Carrito = ({title, image,description, category, price})=> {
    let carrito = []; 
    
  
return (
    <div class="container">
    <div id="carrito">
    <div class="row">
        {/* <!-- Elementos generados a partir del JSON --> */}
        <main id="product" class="col-sm-8 row">{image}</main>
        {/* <!-- Carrito --> */}
        <div class="col-sm-4">
            <th scope="col" class="h5">Carrito</th>
            {/* <!-- Elementos del carrito --> */}
            <ul id="carrito" class="list-group"></ul>
            {/* <!-- Precio total --> */}
            <p class="text-right">Total: <span id="total">{carrito}</span>$</p>
            <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
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
)
}

export default Carrito