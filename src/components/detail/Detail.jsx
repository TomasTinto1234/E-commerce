import React from "react";
import { useState, } from "react";
import { Link } from "react-router-dom";

const Detail = (props) => {
  const {title, description,  image, id, price, rating} = props
  const { products, onAdd } = props;
  // console.log(props)
  // const [carrito, setCarrito] = useState([])
  // const [/*allProducts*/, setAllProducts] = useState([]);
  // const agregarAlCarrito = (item) => {
  //   setCarrito( [...carrito, item] )
  // }
  // const getProductId = async (id) => {
  //  await fetch(`https://fakestoreapi.com/products/${id}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json)
  //       setAllProducts([json]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
// const addCart=(id)=>{
//   console.log(id)
//   dispatch(getProductId(id))
// }

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
        <img src={image} height="250" width="250" />
        <div className="info">
    <div className="control">
        <form 
        // onSubmit={(e) => handleSubmit(e)}
        >
           <div>
        <button  className="btn" onClick={() => onAdd(props.id)}>Add To Cart</button>
      </div>
      <button
        className="btn"
        type="submit"
        onClick={()=>{onAdd(id)}}
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
