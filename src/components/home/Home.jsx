import React, { useState } from "react";
// import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Products from "../products/Products"
import "./navBar.css"
import SingleProduct from "../singleProduct/SingleProduct";
import User from '../users/Users'



const Home = () => {
return (
    <div>
        <Products/>
       <SingleProduct/>
       <User/>
    </div>
)

}

export default Home