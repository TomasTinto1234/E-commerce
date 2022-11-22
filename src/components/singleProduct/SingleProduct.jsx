import React from "react";
import { useEffect, useState } from "react";
import {getFavsProducts} from "../../actions/actions"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";



const SingleProduct = ({title, description, category, image, id, price}) => {


  return (
      <div key={id} >
      <div className="product-details">
      <h1>{title}</h1>
      <p>{price}</p>
      <p className="information">{description}</p>
      <div className="control">
          </div>
          <button  className="btn">
          <span>Shop now</span>

        </button>
          </div>
          <div className="product-image">
          <img src={image} height="250" width="250" />
          <div className="info">
          <h2>category: {category}</h2>
          </div>
          </div>
          </div>
        
          );
        }
        
export default SingleProduct;
