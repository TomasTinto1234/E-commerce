import "./App.css"
import NavBar from "./components/home/navBar";
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer";
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  SingleProduct  from '../src/components/singleProduct/SingleProduct'
import Carrito from "./components/carrito/Carrito";
import Users from "./components/users/Users";
import Products from "./components/products/Products"
import Detail from "./components/detail/Detail"
// import { Switch } from "@chakra-ui/react";
import Login from "./components/login/Login"

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route  path="/" component={NavBar}/>
      <Route exact path="/Products" component={Products}/>
      <Route exact path="/Carrito" component={Carrito}/>
      <Route exact path="/Users" component={Users}/>
      <Route exact path="/Products/:id" component={SingleProduct}/>
      <Route exact path="/Detail/:id" component={Detail}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/footer" component={Footer}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
