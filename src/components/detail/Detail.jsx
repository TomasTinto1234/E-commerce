import React from "react";
import { useEffect, useState } from "react";
// import {getFavsProducts, addFavorite} from "../../actions/actions"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Detail = ({title, description, category, image, id, price, rating}) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const products = useSelector(state => state.allProducts)
  const carrito = []

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [allProducts, setAllProducts] = useState([]);
    const [shopProduct, setShopProduct] = useState([]);
    

  const getProductId = async (id) => {
   await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAllProducts([json]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addFavorite = async (id) => {
  //  console.log(id)
      // setShopProduct(id)
      const item =await allProducts.map((prod)=>prod.id===id)
      console.log(item)
      carrito.push(item)
      console.log(carrito)
    }

    const handleShopChange = (e) => {
      // e.preventDefault()
      setShopProduct(e)
  }

  return (
    <div>
    <div key={id} id="container" className="products-card">
    <div className="product-details">
    <h1>{title}</h1>
    <p>⭐{rating}</p>
    <p>${price}</p>
    <h5>{category}</h5>
    <div>
      <Link to= {`/SingleProduct/${id}`}>
      <button
        className="btn"
        // onClick={() => getProductId(id)}
        >
        <span>
          details
          </span>
      </button>
        </Link>
          </div>
        </div>
        <div className="product-image">
        <img src={image} height="250" width="250" />
        <div className="info">
        {/* <p>${price}</p> */}
    <div className="control">
        <form 
        // onSubmit={(e) => handleSubmit(e)}
        >
          <Link to= {`/Carrito`}>
      <button
        className="btn"
        type="submit"
        onClick={(id)=>addFavorite({id:id ,title: title, category: category, price: price, image: image})}
        // onClick={()=>handleClickFav(id)}
        >
        Shop now
        </button>
        </Link>  
          {/* <div className="cartButton">
        <button className="buttonCart"  onClick={()=>handleShopChange(id)}>
        <span>Shop now</span>

      </button>
          </div> */}
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
