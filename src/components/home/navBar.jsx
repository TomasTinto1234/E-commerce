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
      setCategories([json]);
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
             <li className="pages"> <select onClick={(e)=>getCat(e)} >
            <option >Category</option>
            {allCategories?.map((e)=>{
              return (
                <option onClick={(e)=>getCat(e)} id={e} key={e} value={e}>{e}
                </option>
                )
              })
            }
          </select></li>
             <li className="pages"><a href="/users" >USERS</a></li>
             <li className="pages"><a href="/createProduct" >CREATE PRODUCT</a></li>
             <li className="pages"><a href="#contacto" >CONTACT</a></li>
             <li className="pages"><a href="#carrito"><Link to={`/Carrito` }><BsCart4 color="white"
                size="25px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/></Link>{props.countCartItems ? (
                  <button className="badge">{props.countCartItems}</button>
                ) : (
                  ''
                )}</a></li>
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