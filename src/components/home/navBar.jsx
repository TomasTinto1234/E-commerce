import React, { useState, useEffect } from "react";
import carrito from "../../image/carrito.png"
import {
    Avatar,
    Box,
    Button,
    Flex,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tooltip,
  } from "@chakra-ui/react";
  import "./navBar.css"
 


  const NavBar = () => {

    
    // function seleccionar(link) {
    //     var opciones = document.querySelectorAll('#links  a');
    //     // opciones[0].className = "";
    //     // opciones[1].className = "";
    //     // opciones[2].className = "";
    //     // opciones[3].className = "";
    //     // opciones[4].className = "";
    //     // link.className = "seleccionado";
    
    //     //Hacemos desaparecer el men una vez que se ha seleccionado una opcion
    //     //en modo responsive
    //     var x = document.getElementById("nav");
    //     x.className = "";
    // }
    
    //función que muestra el menu responsive
    // function responsiveMenu() {
    //     var x = document.getElementById("nav");
    //     if (x.className === "") {
    //         x.className = "responsive";
    //     } else {
    //         x.className = "";
    //     }
    // }


return (
    // <div className={`${navbar ? styled.containerBg : styled.containerBgTop}`}>
    <div>
        <section id="inicio">
      <div className ="contenido">
        <header>
          <div className="contenido-header">
          <div class="contenedor-foto">
          {/* <img src="carrito.png" alt=""/> */}
      </div>
           <h1>E-commerce</h1>
           <nav>
            <ul id="links">
             <li><a href="#inicio" className ="seleccionado" >INICIO</a></li>
             <li><a href="#users" >USUARIOS</a></li>
             <li><a href="#products" >PRODUCTOS</a></li>
             <li><a href="#carrito">CARRITO<i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
             <li><a href="#contacto">CONTACTO</a></li>
            </ul>
          <div id="icono-nav" >
            <i className="fa-solid fa-bars"></i>
          </div>

          <div className="redes">
          <a href="https://wa.me/+541161263966" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          <a href="https://www.linkedin.com/in/tomas-tinto-320a85236/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/TomasTinto1234" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/tomas_tinto/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          </div>
           </nav>
          </div>
        </header>
          {/* <div  class="presentacion">
            <p class="bienvenida"></p>
            <p class="descripcion"></p>
              <a href="#productos"></a>
            </div> */}
      </div>
    </section>
    <Flex
      // bg={useColorModeValue("gray.50", "gray.900")}
      // color={useColorModeValue("gray.700", "gray.200")}
    //   alignItems={"center"}
    //   justifyContent={"space-between"}
    //   p={"0rem 0.2rem"}
    //   w={"100%"}
    //   h={"60px"}
    //   // backgroundColor={"gray.100"}
    //   overflow={"hidden"}
    >
{/* <Image src={carrito} alt="homeLogo" /> */}
      <Box display={"flex"} alignItems={"center"} marginRight={"10px"}>
        {/* me oculta el boton si no esta logueado o es propietario */}
        
        <Menu>
          <Box position={"relative"} display="flex" alignItems="flex-end">
            <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
              {/* <Avatar size={"md"} src={imageUser ? imageUser : null} /> */}
              {/* <MenuButton aria-label="Options" variant="outline" px={"1rem"} py={".5rem"}> */}
            
                <Box position={"relative"} display="flex" alignItems="flex-end">
                  {/* <FontAwesomeIcon icon={faCircleUser} className={style.img} /> */}
                  <Tooltip label={`Status: Inactive`} textTransform="capitalize">
                    <Box
                      as="div"
                      h="12px"
                      w="12px"
                      position="absolute"
                    //   bgColor={inactiveColor}
                      borderRadius="50%"
                    />
                  </Tooltip>
                </Box>
            
            
                <Box position={"relative"} display="flex" alignItems="flex-end">
                  {/* <FontAwesomeIcon icon={faCircleUser} className={style.img} /> */}
                  <Tooltip label={`Status: Active`} textTransform="capitalize">
                    <Box
                      as="div"
                      h="12px"
                      w="12px"
                      position="absolute"
                    //   bgColor={activeColor}
                      borderRadius="50%"
                    />
                  </Tooltip>
                </Box>
         
            </MenuButton>
          </Box>
          <MenuList color={"black"}>
            {/* {!user2 && <MenuItem onClick={() => loginWithRedirect()}>Iniciar Sesion</MenuItem>}
            {user2 && <MenuItem onClick={() => detallesUser()}>Informacion de Usuario</MenuItem>}
            {user2 && <MenuItem onClick={() => closeUser()}>Cerrar Sesion</MenuItem>} */}
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  </div>
)


  }

  export default NavBar