import React from "react";
import { useEffect, useState } from "react";
import {getFavsProducts} from "../../actions/actions"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const SingleProduct = ({title, description, category, image, id, price}) => {
  const dispatch = useDispatch()
  const [allProduct, setAllProduct] = useState({});
    const [shopProduct, setShopProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async ()=>{

    const {data} = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProduct(data))
      .catch((err) => {
        console.log(err);
      });
    }
  }, []);

    

  const getProductId = async (id) => {
   await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAllProduct([json]);
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

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setShopProduct(shopProduct)
  //   console.log(shopProduct);
  //   alert(`${shopProduct.title} añadido al carrito `);
  //   setShopProduct({
  //    title: title,
  //    description: description,
  //    price: price,
  //    image: image,
  //    category: category,
  //   });
  //   // history.push("/home");
  //   return console.log("se creo")
  // }

  return (
      <div key={id} id="container" className="products-card">
      <div className="product-details">
      <h1>{title}</h1>
      <p>{price}</p>
      <p class="information">{description}</p>
      <div class="control">
      <Link to= {`/Detail/${id}`}>

        <button
          class="btn"
          onClick={() => getProductId(id)}
          >
          <span>details</span>
        </button>
          </Link>
          <form 
          // onSubmit={(e) => handleSubmit(e)}
          >
       <Link to= {`/Carrito/${id}`}>
        <button
          class="btn"
          // onClick={()=>handleClickFav(id)}
          >
        <span>Shop now</span>
          </button>
          </Link>  
          </form>
          </div>
          <button class="buttonCart"  onClick={()=>handleShopChange(id)}>
          <span>Shop now</span>
            <div class="cartButton">

            </div>
        </button>
          </div>
          <div class="product-image">
          <img src={image} height="250" width="250" />
          <div class="info">
          <h2>category: {category}</h2>
          </div>
          </div>
          </div>
        
          );
        }
        
export default SingleProduct;
