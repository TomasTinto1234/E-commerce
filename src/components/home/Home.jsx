import React, { useState } from "react";
import Products from "../products/Products"
import "./navBar.css"
import SingleProduct from "../singleProduct/SingleProduct";
import User from '../users/Users'
// import Pagination from "../pagination/Pagination"
import Categories from "../categories/Categories.jsx"
import Carrito from "../carrito/Carrito"


const Home = () => {
return (
    <div>
        <Carrito/>
        <Categories/>
        <Products/>
       {/* <Pagination/> */}
       {/* <SingleProduct/> */}
       <User/>
    </div>
)

}

export default Home