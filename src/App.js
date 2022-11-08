import NavBar from "./components/home/navBar";
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer";
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  SingleProduct  from '../src/components/singleProduct/SingleProduct'

function App() {
  return (
    <div>
      <BrowserRouter>
      <header >
      <NavBar/>
      <Home/>
      <Routes>
      <Route path="/:id" component={SingleProduct}/>
      </Routes>
      </header>
       {/* <SingleUser/> */}
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
