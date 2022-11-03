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
  import styled from "./navBar.css"


  const NavBar = () => {
    // const user2 = JSON.parse(user);
    const [navbar, setNavbar] = useState(false);
    // const user = window.localStorage.getItem("User");


    const cambioColor = () => {
        /* console.log(window.scrollY); */
        if (window.scrollY > 150) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
      window.addEventListener("scroll", cambioColor);

      const activeColor = "green.500";
      const inactiveColor = "gray.400";


return (
    <div className={`${navbar ? styled.containerBg : styled.containerBgTop}`}>
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
<Image src={carrito} alt="homeLogo" />
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
                      bgColor={inactiveColor}
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
                      bgColor={activeColor}
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