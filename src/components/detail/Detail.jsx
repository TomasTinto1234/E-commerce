import React from "react";
import { useEffect, useState } from "react";
import {getFavsProducts, addFavorite} from "../../actions/actions"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Detail = ({title, description, category, image, id, price, rating}) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [allProducts, setAllProducts] = useState("");
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
  const handleClickFav = async (id) => {
    dispatch(setShopProduct(id))
      dispatch(getFavsProducts(id));
      setShopProduct(id)
    }

    const handleShopChange = (e) => {
      // e.preventDefault()
      setShopProduct(e.target)
  }

  return (
    <div>
    <div key={id} id="container" className="products-card">
    <div className="product-details">
    <h1>{title}</h1>
    <p>⭐{rating}</p>
    <p>${price}</p>
    <h5>{category}</h5>
    <Link to= {`/SingleProduct/${id}`}>
      <button
        class="btn"
        onClick={() => getProductId(id)}
        >
        <span>details</span>
      </button>

        </Link>
        </div>
        <div class="product-image">
        <img src={image} height="250" width="250" />
        <div class="info">
        {/* <p>${price}</p> */}
    <div class="control">
        <form 
        // onSubmit={(e) => handleSubmit(e)}
        >
          <Link to= {`/Carrito`}>
      <button
        class="btn"
        type="submit"
        onClick={(id)=>addFavorite({id:id ,title: title, category: category, price: price, image: image})}
        // onClick={()=>handleClickFav(id)}
        >
        Shop now
        </button>
        </Link>  
          {/* <div class="cartButton">
        <button class="buttonCart"  onClick={()=>handleShopChange(id)}>
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
