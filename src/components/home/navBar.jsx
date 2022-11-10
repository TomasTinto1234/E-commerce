import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carrito from "../../image/carrito.png"
import "./navBar.css"
 


  const NavBar = () => {

return (
    <div>
        <section id="inicio">
      <div className ="contenido">
        <header>
          <div className="contenido-header">
          <div class="contenedor-foto">
      </div>
         <a className="pr" href="#inicio"><h1 className="sonh1" >E-commerce</h1></a>
      <img src={carrito} height="55, 65"/>
           <nav className="elnav">
            <ul id="links" className="losul">
             <li className="pages"><a href="#inicio" className ="seleccionado" >INICIO</a></li>
             <li className="pages"><a href="#users" >USUARIOS</a></li>
             <li className="pages"><a href="#products" >PRODUCTOS</a></li>
             <li className="pages"><a href="#carrito">CARRITO<i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
             <li className="pages"><a href="#contacto">CONTACTO </a></li>
             <li className="pages"><a href="#categories">CATEGORIAS</a></li>
            </ul>
          <div id="icono-nav" >
            <i className="fa-solid fa-bars"></i>
          </div>

          <div className="redes">
          <a className="pr" href="https://wa.me/+541161263966" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          <a className="pr" href="https://www.linkedin.com/in/tomas-tinto-320a85236/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a className="pr" href="https://github.com/TomasTinto1234" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a className="pr" href="https://www.instagram.com/tomas_tinto/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          </div>
           </nav>
          </div>
        </header>
      </div>
    </section>
  </div>
)


  }

  export default NavBar