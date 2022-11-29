import "./App.css"
import NavBar from "./components/home/navBar";
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer";
// import { Routes, Route } from 'react-router-dom';
import {  Route, Routes } from "react-router-dom";
import  SingleProduct  from '../src/components/singleProduct/SingleProduct'
import Carrito from "./components/carrito/Carrito";
import Users from "./components/users/Users";
import Products from "./components/products/Products"
import Detail from "./components/detail/Detail"
import CreateProduct from "./components/createProduct/CreateProduct"
// import { Switch } from "@chakra-ui/react";
import Login from "./components/login/Login"
// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route  path="/CreateProduct" element={<CreateProduct/>}/>
      <Route  path="/Carrito/" element={<Carrito/>}/>
      <Route  path="/Carrito/:id" element={<Carrito/>}/>
      <Route  path="/Login" element={<Login/>}/>
      {/* <Route  path="/" component={NavBar}/>s */}
      <Route  path="/Products" element={<Products/>}/>
      <Route  path="/Users" element={<Users/>}/>
      <Route  path="/SingleProduct/:id" element={<SingleProduct />}/>
      <Route  path="/Detail/:id" element={<Detail/>}/>
      <Route  path="/footer" element={<Footer/>}/>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
