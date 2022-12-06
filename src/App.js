import "./App.css"
import {useState} from "react"
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
import ProductItem from "./components/ProductItem"
import AllProducts from "./products";
import CartItem from "./components/CartItem/CartItem"
import Basket from "./components/Basquet";
import Header from "./components/Header";
import Main from "./components/Main";


function App() {
  const { products } = AllProducts;
  const [cartItems, setCartItems] = useState([]);
const vaciarCarrito = () => {
  setCartItems([])
}
  const onAdd = (product) => {
    const existingItem = cartItems.find((x) => x.id === product.id);
    console.log(existingItem)
    if (existingItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...existingItem, qty: existingItem.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  // console.log(cartItems);
  const onRemove = (product) => {
    const existingItem = cartItems.find((x) => x.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...existingItem, qty: existingItem.qty - 1 } : x
        )
      );
    }
  };
  const onSum = (product) => {
    const existingItem = cartItems.find((x) => x.id === product.id);
    console.log(existingItem)
    if (!existingItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? {...existingItem,qty: [...existingItem.qty + 1 ]} : x
        )
      );
    }
  };
  const onKick = (product) => {
    const existingItem = cartItems.find((x) => x.id === product.id);
    if (!existingItem) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? {...existingItem,qty: [...existingItem.qty - 1]} : x
        )
      );
    }
  };
  return (
    <div className="elApp">
      <NavBar countCartItems={cartItems.length}/>
      {/* <Header countCartItems={cartItems.length}></Header>
      <div className="row">
      <Main products={products} onAdd={onAdd}></Main>
      <Basket
      cartItems={cartItems}
      onAdd={onAdd}
      onRemove={onRemove}
      ></Basket>
    </div> */}
      <Routes>
        {/* <Route  path="/Header" countCartItems={cartItems.length} element={<Header countCartItems={cartItems.length}/>}/>
        <Route  path="/Main"products={products} onAdd={onAdd} element={<Main products={products} onAdd={onAdd}/>}/>
        <Route  path="/Basket" cartItems={cartItems} element={<Basket cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}/>}
          /> */}
      <Route  path="/SingleProduct/:id" element={<SingleProduct onAdd={onAdd} cartItems={cartItems} />}/>
      <Route  path="/Detail/:id" element={<Detail onAdd={onAdd} products={products}/>}/>
      <Route  path="/CreateProduct" element={<CreateProduct />}/>
      <Route  path="/CartItem" element={<CartItem products={products}/>}/>
      <Route  path="/Carrito" element={<Carrito cartItem={cartItems} countCartItems={cartItems}onAdd={onAdd} onRemove={onRemove} onKick={onKick}onSum={onSum} vaciarCarrito={vaciarCarrito}/>}/>
      {/* <Route  path="/Carrito/:id" element={<Carrito cartItems={cartItems}/>}/> */}
      <Route  path="/ProductItem" element={<ProductItem onAdd={onAdd} products={products}/>}/>
      <Route  path="/Login" element={<Login/>}/>
      <Route  path="/NavBar" element={<NavBar/> }countCartItems={cartItems.length}/>
      <Route  path="/Products/:id" element={<Products products={products}/>}/>
      <Route  path="/Users" element={<Users/>}/>
      <Route  path="/footer" element={<Footer/>}/>
      <Route exact path="/" element={<Home products={products} onAdd={onAdd}/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
