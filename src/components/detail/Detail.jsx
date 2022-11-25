import React from "react";
import { useEffect, useState, useReducer, useContext } from "react";
// import {getFavsProducts, addFavorite} from "../../actions/actions"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleProduct from "../singleProduct/SingleProduct"
import shoppingInitialState from "../../redux/redux"

const Detail = (props) => {
  const {title, description, category, image, id, price, rating} = props
  // console.log(props)
const dispatch = useDispatch()
  // const cart = useSelector(state => state.cart)
  // const products = useSelector(state => state.allProducts)
  // const carrito = []
  // const [state, dispatch] =useReducer(shoppingInitialState)
  // console.log(state)
  //   const {products, cart} = state

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products?sort=desc")
  //     .then((res) => res.json())
  //     .then((json) => setAllProducts(json))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const [carrito, setCarrito] = useState([])
  const [allProducts, setAllProducts] = useState([]);
  const agregarAlCarrito = (item) => {
    setCarrito( [...carrito, item] )
  }
  const getProductId = async (id) => {
   await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setAllProducts([json]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
const addCart=(id)=>{
  console.log(id)
  dispatch(getProductId(id))
}

// const handleAddToCart = () => {
//   if (cantidad > 0) {

//       agregarAlCarrito({
//           id, title, price, image
//       })
      
//     }}

  return (
    <div>
    <div key={id} id="container" className="products-card">
    <div className="product-details">
    <h1>{title}</h1>
    <p>⭐{rating}</p>
    <p>${price}</p>
    <h5>{category}</h5>
    <div>
        <button
        className="btn"
        // onClick={() => getProductId(id)}
        >
          <Link to={`/SingleProduct/${props.id}`}>
            <span >
              Details
          </span>
          </Link>
      </button>

          </div>
        </div>
        <div className="product-image">
        <img src={image} height="250" width="250" />
        <div className="info">
    <div className="control">
        <form 
        // onSubmit={(e) => handleSubmit(e)}
        >
      <button
        className="btn"
        type="submit"
        onClick={()=>{agregarAlCarrito(id)}}
        // onAdd={handleAddToCart}
        >
        Shop Now
        </button>
        </form>
        </div>
        <h5>{description}</h5>
        </div>
        </div>
        </div>
        </div>
      
        );
        }
        
export default Detail;
