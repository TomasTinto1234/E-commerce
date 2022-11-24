import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carrito from "../../image/carrito.png"
import "./navBar.css"
import {
  BiUserCircle,
  BiUser,
  BiMenu
  // BsCart4
} from "react-icons/bi";
import {
  BsCart4
} from "react-icons/bs";
import Carrito from "../carrito/Carrito"


  const NavBar = () => {
  //   function seleccionar(link) {
  //     let opciones = document.querySelectorAll('#links  a');
  //     opciones[0].className = "elnav";
  //     opciones[1].className = "elnav";
  //     opciones[2].className = "elnav";
  //     opciones[3].className = "elnav";
  //     opciones[4].className = "elnav";
  //     link.className = "seleccionado";
  
  //     //Hacemos desaparecer el men una vez que se ha seleccionado una opcion
  //     //en modo responsive
  //     let x = document.getElementById("nav");
  //     x.className = "";
  // }
     
  //función que muestra el menu responsive
  function responsiveMenu() {
      const x = document.getElementById("elnav");
      if (x.className === "elnav") {
          x.className = "responsive";
      } else {
          x.className = "elnav";
      }
  }

return (
    <div>
          {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />  */}
        <section id="inicio">
      <div className ="contenido">
        <header>
          <div className="contenido-header">
         <a className="pr" href="#inicio" ><Link  to="/"><h1>E-commerce</h1></Link></a>
          {/* <div className="contenedor-foto">
         <a className="pr" href="#inicio" ><img src={carrito} height="55, 65"/></a>
      </div> */}
         <nav id="elnav" onClick={()=>responsiveMenu()}>
            <ul id="links" >
             <li className="pages"><a href="#products" >PRODUCTOS</a></li>
             <li className="pages"><a href="#categories" >CATEGORIAS</a></li>
             <li className="pages"><a href="#users" >USUARIOS</a></li>
             <li className="pages"><a href="#carrito"><Link to={`/Carrito` }><BsCart4 color="white"
                size="25px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/></Link></a></li>
                <li className="pages"><a href="#contacto" >CONTACTO</a></li>
             <li className="pages"><a href="#login" ><Link to={"/Login"}><BiUserCircle color="white"
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