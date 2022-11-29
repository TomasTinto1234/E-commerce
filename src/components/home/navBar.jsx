import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carrito from "../../image/carrito.png"
import "./navBar.css"
import {
  BiUserCircle,
  BiUser,
  BiMenu,
  BiCart
} from "react-icons/bi";
import {
  BsCart4
} from "react-icons/bs";
import Carrito from "../carrito/Carrito"
import { useNavigate } from 'react-router'


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
  let util = {
    f: {
      addStyle: function (elem, prop, val, vendors) {
        let i, ii, property, value
        if (!util.f.isElem(elem)) {
          elem = document.getElementById(elem)
        }
        if (!util.f.isArray(prop)) {
          prop = [prop]
          val = [val]
        }
        for (i = 0; i < prop.length; i += 1) {
          let thisProp = String(prop[i]),
            thisVal = String(val[i])
          if (typeof vendors !== "undefined") {
            if (!util.f.isArray(vendors)) {
              vendors.toLowerCase() == "all" ? vendors = ["webkit", "moz", "ms", "o"] : vendors = [vendors]
            }
            for (ii = 0; ii < vendors.length; ii += 1) {
              elem.style[vendors[i] + thisProp] = thisVal
            }
          }
          thisProp = thisProp.charAt(0).toLowerCase() + thisProp.slice(1)
          elem.style[thisProp] = thisVal
        }
      },
      cssLoaded: function (event) {
        let child = util.f.getTrg(event)
        child.setAttribute("media", "all")
      },
      events: {
        cancel: function (event) {
          util.f.events.prevent(event)
          util.f.events.stop(event)
        },
        prevent: function (event) {
          event = event || window.event
          event.preventDefault()
        },
        stop: function (event) {
          event = event || window.event
          event.stopPropagation()
        }
      },
      getSize: function (elem, prop) {
        return parseInt(elem.getBoundingClientRect()[prop], 10)
      },
      getTrg: function (event) {
        event = event || window.event
        if (event.srcElement) {
          return event.srcElement
        } else {
          return event.target
        }
      },
      isElem: function (elem) {
        return (util.f.isNode(elem) && elem.nodeType == 1)
      },
      isArray: function(v) {
        return (v.constructor === Array)
      },
      isNode: function(elem) {
        return (typeof Node === "object" ? elem instanceof Node : elem && typeof elem === "object" && typeof elem.nodeType === "number" && typeof elem.nodeName==="string" && elem.nodeType !== 3)
      },
      isObj: function (v) {
        return (typeof v == "object")
      },
      replaceAt: function(str, index, char) {
        return str.substr(0, index) + char + str.substr(index + char.length);
      }
    }
  },
     //////////////////////////////////////
    // ok that's all the utilities      //
   // onto the select box / form stuff //
  //////////////////////////////////////
  form = {
  f: {
    init: {
      register: function () {
        // console.clear()// just cuz codepen
        let child, children = document.getElementsByClassName("field"), i
        for (i = 0; i < children.length; i += 1) {
          child = children[i]
          util.f.addStyle(child, "Opacity", 1)
        }
        children = document.getElementsByClassName("psuedo_select")
        for (i = 0; i < children.length; i += 1) {
          child = children[i]
          child.addEventListener("click", form.f.select.toggle)
        }
      },
      unregister: function () {
        //just here as a formallity
        //call this to stop all ongoing timeouts are ready the page for some sort of json re-route
      }
    },
    select: {
      blur: function (field) {
        field.classList.remove("focused")
        let child, children = field.childNodes, i, ii, nested_child, nested_children
        for (i = 0; i < children.length; i += 1) {
          child = children[i]
          if (util.f.isElem(child)) {
            if (child.classList.contains("deselect")) {
              child.parentNode.removeChild(child)
            } else if (child.tagName == "SPAN") {
              if (!field.dataset.value) {
                util.f.addStyle(child, ["FontSize", "Top"], ["16px", "32px"])
              }
            } else if (child.classList.contains("psuedo_select")) {
              nested_children = child.childNodes
              for (ii = 0; ii < nested_children.length; ii += 1) {
                nested_child = nested_children[ii]
                if (util.f.isElem(nested_child)) {
                  if (nested_child.tagName == "SPAN") {
                    if (!field.dataset.value) {
                      util.f.addStyle(nested_child, ["Opacity", "Transform"], [0, "translateY(24px)"])
                    }
                  } else if (nested_child.tagName == "UL") {
                      util.f.addStyle(nested_child, ["Height", "Opacity"], [0, 0])
                  }
                }
              }
            }
          }
        }
      },
      focus: function (field) {
        field.classList.add("focused")
        let bool = false, child, children = field.childNodes, i, ii, iii, nested_child, nested_children, nested_nested_child, nested_nested_children, size = 0
        for (i = 0; i < children.length; i += 1) {
          child = children[i]
          // util.f.isElem(child) && child.classList.contains("deselect") ? bool = true : null
        }
        if (!bool) {
          child = document.createElement("div")
          child.className = "deselect"
          child.addEventListener("click", form.f.select.toggle)
          field.insertBefore(child, children[0])
        }
        for (i = 0; i < children.length; i += 1) {
          child = children[i]
          if (util.f.isElem(child) && child.classList.contains("psuedo_select")) {
            nested_children = child.childNodes
            for (ii = 0; ii < nested_children.length; ii += 1) {
              nested_child = nested_children[ii]
              if (util.f.isElem(nested_child) && nested_child.tagName == "UL") {
                size = 0
                nested_nested_children = nested_child.childNodes
                for (iii = 0; iii < nested_nested_children.length; iii += 1) {
                  nested_nested_child = nested_nested_children[iii]
                  if (util.f.isElem(nested_nested_child) && nested_nested_child.tagName == "LI") {
                    size += util.f.getSize(nested_nested_child, "height")
                    console.log("size: " + size)
                  }
                }
                util.f.addStyle(nested_child, ["Height", "Opacity"], [size + "px", 1])
              }
            }
          }
        }
      },
      selection: function (child, parent) {
        let children = parent.childNodes, i, ii, nested_child, nested_children, time = 0, value
        if (util.f.isElem(child) && util.f.isElem(parent)) {
          parent.dataset.value = child.dataset.value
          value = child.innerHTML
        }
        for (i = 0; i < children.length; i += 1) {
          child = children[i]
          if (util.f.isElem(child)) {
            if (child.classList.contains("psuedo_select")) {
              nested_children = child.childNodes
              for (ii = 0; ii < nested_children.length; ii += 1) {
                nested_child = nested_children[ii]
                if (util.f.isElem(nested_child) && nested_child.classList.contains("selected")) {
                  if (nested_child.innerHTML)  {
                    time = 1E2
                    util.f.addStyle(nested_child, ["Opacity", "Transform"], [0, "translateY(24px)"], "all")
                  }
                  setTimeout(function (c, v) {
                    c.innerHTML = v
                    util.f.addStyle(c, ["Opacity", "Transform", "TransitionDuration"], [1, "translateY(0px)", ".1s"], "all")
                  }, time, nested_child, value)
                }
              }
            } else if (child.tagName == "SPAN") {
              util.f.addStyle(child, ["FontSize", "Top"], ["12px", "8px"])
             }
           }
        }
      },
      toggle: function (event) {
        util.f.events.stop(event)
        let child = util.f.getTrg(event), children, i, parent
        switch (true) {
          case (child.classList.contains("psuedo_select")):
          case (child.classList.contains("deselect")):
            parent = child.parentNode
            break
          case (child.classList.contains("options")):
            parent = child.parentNode.parentNode
            break
          case (child.classList.contains("option")):
            parent = child.parentNode.parentNode.parentNode
            form.f.select.selection(child, parent)
            break
        }
        parent.classList.contains("focused") ? form.f.select.blur(parent) : form.f.select.focus(parent)
      }
    }
  }}
  window.onload = form.f.init.register

  const handleToIndex = () => {
      navigate('/')
  }
  const [allCategories, setAllCategories] = useState([]);
  const [categories, setCategories] = useState([])

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
             <li className="pages"><a href="#categories" > <select class="field" onClick={(e)=>getCategory(e)} >
            <option  className="pages" >Category</option>
            {allCategories?.map((e)=>{
              return (
                <option onClick={getCategories} className="pages" id={e} key={e} value={e}>{e}
                </option>
                )
              })
            }
          </select></a></li>
             <li className="pages"><a href="/users" >USUARIOS</a></li>
             <li className="pages"><a href="/createProduct" >CREAR PRODUCTO</a></li>
             <li className="pages"><a href="#contacto" >CONTACTO</a></li>
             <li className="pages"><a href="#carrito"><Link to={`/Carrito` }><BsCart4 color="white"
                size="25px"
                onMouseOver={({ target }) => (target.style.color = "#F9B621")}
                onMouseOut={({ target }) => (target.style.color = "white")}
                cursor="pointer"/></Link></a></li>
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