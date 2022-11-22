import React, { useState, useReducer } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { shoppingInitialState } from "../../redux/redux";
import "./carrito.css";
import ProductItem from "../ProductItem/ProductItem"
import CartItem from "../CartItem/CartItem"
import { ADD_TO_CART } from "../../actions/actions";

const Carrito = ({title, description, category, image, id, price}) => {

  const dispatch =useDispatch()
  const cart = useSelector(state => state.cart)
//   const [state, dispatch] =useReducer(state => state.products)
// console.log(state)
//   const {products, cart} = state

const addCart=(id)=>{
  console.log(id)
  dispatch({type: ADD_TO_CART, payload: id})
}
const deleteCart=()=>{}
const clearCart=()=>{}

  return (
      <div className="carritos">
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
                <img src={image} id="product" className="input__box">
                  {image}
                </img>
                <ul id="carrito" className="list-group"></ul>
                <p className="forget">
                  Total: <span id="total">{price}</span>$
                </p>
                <button id="boton-vaciar" onClick={clearCart} className="btn btn-danger">
                  - Vaciar -
                </button>
                <button className="btn btn-danger">
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
    </div>
  );
};

export default Carrito;
