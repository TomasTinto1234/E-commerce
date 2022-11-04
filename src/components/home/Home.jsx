import React, { useState } from "react";
// import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Products from "../products/Products"
import "./navBar.css"
import SingleProduct from "../singleProduct/SingleProduct";
import User from '../users/Users'
import Pagination from "../pagination/pagination"
import Categories from "../categories/Categories"


const Home = () => {
return (
    <div>
        <Pagination/>
        <Products/>
        <Categories/>
       <Pagination/>
       <SingleProduct/>
       <User/>
    </div>
)

}

export default Home