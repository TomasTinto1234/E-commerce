import React ,{useState} from "react";

const Carrito = ({title, image,description, category})=> {
    // const [allProducts, setAllProducts] = useSelector((state)=>state.products);
    let carrito = [];
    
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
    }
    // function calcularTotal() {
    //     // Recorremos el array del carrito 
    //     return carrito.reduce((total, item) => {
    //         // De cada elemento obtenemos su precio
    //         const miItem = allProducts.filter((allProducts) => {
    //             return allProducts.id === parseInt(item);
    //         });
    //         // Los sumamos al total
    //         return total + miItem[0].precio;
    //     }, 0).toFixed(2);
    // }

    function vaciarCarrito() {
        carrito = [];
    }
   

// function renderizarProductos() {
//    allProducts && allProducts.forEach((info) => {
//     return (
//         <div key={info.id} id="container" className="products-card">
//         <div className="product-details">
//           <h1>{info.title}</h1>
//           <p class="information">description: {info.description}</p>
//         </div>
//         <div class="product-image">
//           <img src={info.image} height="250" width="250" />
//           <div class="info">
//             <h2>category: {info.category}</h2>
//           </div>
//         </div>
//       </div>
//     )
// });
// }
// renderizarProductos();

function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
}


return (
    <div id="carrito">
<div class="container">
    <div class="row">
        {/* <!-- Elementos generados a partir del JSON --> */}
        <main id="product" class="col-sm-8 row">{image}</main>
        {/* <!-- Carrito --> */}
        <div class="col-sm-4">
            <th scope="col" class="h5">Carrito</th>
            {/* <!-- Elementos del carrito --> */}
            <ul id="carrito" class="list-group"></ul>
            {/* <!-- Precio total --> */}
            <p class="text-right">Total: <span id="total">{}</span>&euro;</p>
            <button id="boton-vaciar" onClick={()=>vaciarCarrito()} class="btn btn-danger">Vaciar</button>
        </div>
    </div>
</div>

    </div>
)
}

export default Carrito