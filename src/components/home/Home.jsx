import React, { useState } from "react";
import Products from "../products/Products"
import "./navBar.css"
import SingleProduct from "../singleProduct/SingleProduct";
import User from '../users/Users'
// import Paginations from "../pagination/Pagination"
import Categories from "../categories/Categories.jsx"
import Carrito from "../carrito/Carrito"
import Login from "../login/Login"
import Detail from "../detail/Detail"
import CreateProduct from "../createProduct/CreateProduct"


const Home = () => {
return (
    <div>
        <Login/>
        <Carrito/>
        {/* <Categories/> */}
        <Products/>
        <CreateProduct/>
        {/* <SingleProduct/> */}
        {/* <Detail/> */}
       {/* <Paginations/> */}
       {/* <SingleProduct/> */}
       <User/>
    </div>
)

}

export default Home