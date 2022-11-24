import React, { useState, useReducer } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { shoppingInitialState } from "../../redux/redux";
import "./carrito.css";
import ProductItem from "../ProductItem/ProductItem"
import CartItem from "../CartItem/CartItem"
import { ADD_TO_CART } from "../../actions/actions";

const Carrito = (id) => {
  const dispatch =useDispatch()
  const cart = useSelector(state => state.cart)
  const {title, description, category, image, price} = cart
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
        {cart.length === 0 ? (
          <div class="container">
          <div id="carritoVacio" class="text-center py-5">
  
          </div>
  
          <div class="container py-5">
              <div class="card text-justify">
                  <div class="card-header bg-info text-center ">
                      <h4 class="text-light">Carrito</h4>
                  </div>
                  <div id="carritoItems"  class="flex-md-column">
                      <div class="container">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">nombre</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Acción</th>
                                <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody id="items"></tbody>
                            <tfoot>
                              <tr id="footer">
                                <th scope="row" colspan="5">Carrito vacío</th>
                              </tr>
                            </tfoot>
                          </table>
                          {/* <br> */}
                          <div class="row" id="cards"></div>
                          <template id="template-footer">
                            <th  scope="row" colspan="2"><img src="./image/carrito.png" class="img-cart" alt="carrito"  /></th>
                            
                            <td>10</td>
                            <td>
                                <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                                    vaciar todo
                                </button>
                            </td>
                            <td class="font-weight-bold">$ <span>5000</span></td>
                        </template>
                        <template id="template-carrito">
                          <tr>
                            <th scope="row">id</th>
                            <td>Café</td>
                            <td>1</td>
                            <td>
                                <button class="btn btn-info btn-sm">
                                    +
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    -
                                </button>
                            </td>
                            <td>$ <span>500</span></td>
                          </tr>
                        </template>
                        </div>
                      
                      
                        <div class="item-productos">
                          <template id="template-card">
                            <div class="col-md-3 col-12 mb-2">
                              <div class="card">
                                <img src="" alt="" class="card-img-top img-producto"/>
                                <div class="card-body">
                                  <h5>Titulo</h5>
                                  <p>precio</p>
                                  <button class="btn btn-dark">añadir al carrito</button>
                                </div>
                              </div>
                            </div>
                          </template>
                        
                        </div>
                  </div>
  
  
                  
  
  
              </div>
          </div>
          </div>
        ): 
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
                <button  className="btn" id="boton-vaciar" onClick={clearCart} >
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
