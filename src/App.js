import Products from "./components/products/Products"
import './App.css';
import SingleProduct from "./components/singleProduct/SingleProduct";
import User from './components/users/Users'
import SingleUser from "./components/singleUser/SingleUser";
import NavBar from "./components/home/navBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      E-commerce
      <NavBar/>
       <Products/>
       <SingleProduct/>
       <User/>
       {/* <SingleUser/> */}
      </header>
    </div>
  );
}

export default App;
