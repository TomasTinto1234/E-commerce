import React, { useState, useReducer,useParams, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { shoppingInitialState } from "../../redux/redux";
import "./carrito.css";
import ProductItem from "../ProductItem/ProductItem"
import CartItem from "../CartItem/CartItem"
import { ADD_TO_CART } from "../../actions/actions";

const Carrito = (id) => {
//  const {id} = useParams()
 const [product, setProduct] = useState([])
const [carrito, setCarrito] = useState({})
useEffect(()=>{
  getProductId(id)
},[])

const getProductId =  (id) => {
   fetch(`https://fakestoreapi.com/products/${id}`)
     .then((res) => res.json())
     .then((json) => {
       console.log(json)
       setProduct(json);
     })
     .catch((err) => {
       console.log(err);
     });
 };
const {title, description, category, image, price} = product

const removerDelCarrito = (id) => {
  setCarrito( carrito.filter(prod => prod.id !== id ) )
}

const vaciarCarrito = () => {
  setCarrito([])
}

const totalCantidad = () => {
  return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
}

const totalCompra = () => {
  return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
}

const isInCart = (id) => {
  return carrito.some( prod => prod.id === id )
}

const limpiarTodoElCarrito = () => {
  setCarrito([]);
};

// const addCart=(id)=>{
//   console.log(id)
//   dispatch({type: ADD_TO_CART, payload: id})
// }
const deleteCart=()=>{}
const clearCart=()=>{}

  return (
      <div className="carritos">
      {
    <div id="carrito">
         <div className="colour"></div>
    <div className="colour"></div>
    <div className="colour"></div>
      <div className="boxLogin">
      <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="container">
          <div id="carrito" className="formLogin">
            <div className="input__box">
              <div className="col-sm-4">
                <h1 scope="col" className="jpy">
                  Carrito
                </h1>
                {/* <article>
                {products && products.map((product)=>{
                  <ProductItem key={product.id} data={product} addCart={addCart} />
                })}
                </article> */}
                {/* <article>
                {cart && cart.map((item,idex)=>{
                  <CartItem key={idex} data={item} addCart={addCart} />
                })}
                </article> */}
                <p>title: {title}</p>
                <p>category: {category}</p>
                <p className="information">price: {price}</p> 
                <img src={image} id="product" className="input__box"/>
                  {image}
                <button onClick={removerDelCarrito}>eliminar un product</button>
                <ul id="carrito" className="list-group"></ul>
                <p className="forget">
                  Total: <span id="total">{price}</span>$
                </p>
                <button  className="btn" id="boton-vaciar" onClick={limpiarTodoElCarrito} >
                  - Vaciar -
                </button>
                <button  className="btn">
                  <Link to="/">
                  volver Home
                </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
}
  </div>
  );
};

export default Carrito;
