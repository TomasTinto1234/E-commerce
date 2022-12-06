import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navBar.css"
import {
  BiUser,
  BiMenu,
} from "react-icons/bi";
import {
  BsCart4
} from "react-icons/bs";
import AllProducts from "../../products";
import { useNavigate } from 'react-router'


  const NavBar = (props) => {
 
    const {products} = AllProducts
    const [category , setCategory] = useState({})
  useEffect(()=>{
    getCategory()
    getCategories()
    // select()
 },[])
  function responsiveMenu() {
      const x = document.getElementById("elnav");
      if (x.className === "elnav") {
          x.className = "responsive";
      } else {
          x.className = "elnav";
      }
  }
  const navigate = useNavigate()
  const handleBack = () => {
      navigate(-1) 
  }

  const handleToIndex = () => {
      navigate('/')
  }
  const [allCategories, setAllCategories] = useState([]);
  const [/*categories*/, setCategories] = useState([])

  const getCategories = async (category) => {
    await fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((json) => {
      setCategory(json);
    })
    .catch((err) => {
        console.log(err);
    });
  }
  const getCategory = async () => {
    await fetch(`https://fakestoreapi.com/products/categories`)
    .then((res) => res.json())
    .then((json) => {
      setAllCategories(json);
    })
    .catch((err) => {
        console.log(err);
    });
  }
 function getCat(categ){
  console.log(categ.target.value)
   const cat = products.filter((e)=> e.category === categ.target.value)
   return cat
 }

 const onClickCategory = (categ) => {
  console.log(categ)
  const allProducts = products
      const categoryFilter =
      categ === allProducts.category
          ? allProducts
          : allProducts.filter((el) => el.category === categ);
          return categoryFilter
};

return (
    <div>
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />  */}
        <section id="inicio">
      <div className ="contenido">
        <header>
          <div className="contenido-header">
         <h1 className="pages" onClick={handleToIndex}>E-commerce</h1>
          {/* <div className="contenedor-foto">
         <a className="pr" href="#inicio" ><img src={carrito} height="55, 65"/></a>
      </div> */}
         <nav id="elnav" onClick={()=>responsiveMenu()}>
            <ul id="links" >
             {/* <li className="pages"><a href="#products" >PRODUCTOS</a></li> */}
             <li> <select className="btn">
            <option>Category</option>
            {allCategories?.map((e)=>{
              return (
                <option onClick={()=>onClickCategory(e)} id={e} key={e} value={e}>{e}
                </option>
                )
              })
            }
          </select></li>
          <li className="pages">   <select className="btn">
            <option>Name</option>
            <option value="az">a-z</option>
            <option value="za">z-a</option>
          </select></li>
             <li className="pages"><a href="#users" ><Link to={`/Users` }>USERS</Link></a></li>
             <li className="pages"><a href="#CreateProduct" ><Link to={`/CreateProduct`}>CREATE PRODUCT</Link></a></li>
             <li className="pages"><a href="#contacto" >CONTACT</a></li>
             <li className="pages"><a href="#carrito"><Link to={`/Carrito` }> {props.countCartItems ? (<button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}<BsCart4 color="white"
                size="25px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/></Link></a></li>
             <li className="pages"><a href="#login" ><Link to={"/Login"}><BiUser color="white"
                size="25px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/></Link></a></li>
            </ul>
           </nav>
             <nav id="icono-nav" onClick={()=>responsiveMenu()}>
              <BiMenu color="gray"
                size="35px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/>
          </nav>
          </div>
        </header>
      </div>
    </section>
  </div>
)


  }

  export default NavBar