import NavBar from "./components/home/navBar";
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer";
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  SingleProduct  from '../src/components/singleProduct/SingleProduct'
import Carrito from "./components/carrito/Carrito";
import Users from "./components/users/Users";
import Products from "./components/products/Products"
import Detail from "./components/detail/Detail"

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Home/>
      <Routes>
      <Route exact path="/Products" component={Products}/>
      <Route exact path="/Carrito/:id" component={Carrito}/>
      <Route exact path="/Users" component={Users}/>
      <Route exact path="/Home" component={Home}/>
      <Route exact path="/Products/:id" component={SingleProduct}/>
      <Route exact path="/Detail/:id" component={Detail}/>
      <Route exact path="/footer" component={Footer}/>
      </Routes>

       {/* <SingleUser/> */}
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
