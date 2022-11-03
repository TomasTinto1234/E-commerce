import NavBar from "./components/home/navBar";
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <header >
      <NavBar/>
      <Home/>
      </header>
       {/* <SingleUser/> */}
      <Footer/>

    </div>
  );
}

export default App;
