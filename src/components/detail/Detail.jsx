import React from "react";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {  useParams } from 'react-router-dom'
import AllProducts from "../../products"


const Detail = (props) => {
  const { onAdd } = props;
    // console.log(products)
    const { id } = useParams(AllProducts);
    const [product, setProduct] = useState({})
    const [carrito, setCarrito] = useState([])
  
    // useEffect(()=>{
    //    getProductId(id)
    // },[id])


    // const getProductId = async (id) => {
    //    await fetch(`https://fakestoreapi.com/products/${id}`)
    //       .then((res) => res.json())
    //       .then((json) => {
    //         console.log(json)
    //         setProduct(json);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };    

  return (
    <div>
    <div key={id} id="container" className="products-card">
    <div className="product-details">
    <h1>{props.title}</h1>
    <p>⭐{props.rating}</p>
    <p>${props.price}</p>
    <div>
        <button
        className="btn"
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
        <img src={props.image} height="250" width="250" />
        <div className="info">
    <div className="control">
        <form 
        // onSubmit={(e) => handleSubmit(e)}
        >
          </form>
               <div>
        <button  className="btn" onClick={()=>{onAdd(props.id)}}><span>Add To Cart</span></button>
      </div>
      {/* <button
        className="btn"
        type="submit"
        onClick={()=>{onAdd(id)}}
        // onAdd={handleAddToCart}
        >
        Shop Now
        </button> */}
        </div>
        <h5>{props.description}</h5>
        </div>
        </div>
        </div>
        </div>
      
        );
        }
        
export default Detail;
