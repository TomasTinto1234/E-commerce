import React, { useEffect, useState } from "react";
import "./createProduct.css"
import { useNavigate } from 'react-router'
import {
  BsHouse
} from "react-icons/bs";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [input, setInput] = useState("");
  const navigate = useNavigate()
  //const handleBack = () => {
  //    navigate(-1) 
  //}

  const handleToIndex = () => {
      navigate('/')
  }

  function handleSubmit(e) {
    e.preventDefault();
    // dispatch(createDog(input));
    console.log(e);
    alert(`${input.title.toUpperCase()} fue creado con exito `);
    setInput({
      title: "",
      image: "",
      description: "",
      category: "",
      price: "",
    });
    return console.log("se creo")
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "title":
        setTitle(value);break
      case "description":
        setDescription(value);break
      case "category":
        setCategory(value);break
      case "image":
        setImage(value);break
      case "price":
        setPrice(value);break
      default:
    }
  }


  function handleSubmit(e){
  // e.preventDefault()
  const product = {
    // id:id,
    title,
    category,
    description,
    price,
    image,
  }
  return product
  }

  return (
    <div id="createProduct">
                    <button className="btn" onClick={handleToIndex}><span><BsHouse color="black"
                size="35px"
                cursor="pointer"/></span></button>
      <div className="contenedor">
    <h1 className="logo"><span className="nombre-empresa">Create</span> Product</h1>
    <div className="wrapper animated bounceInLeft">
      <div className="contacto">
        <h3>Complete Form</h3>
        <form className="formulario">
          <p>
            <label>Nombre</label>
            <input type="text" name="nombre" className="input-form" onChange={handleChange}
           />
          </p>
          <p>
            <label>Image</label>
            <input type="file" name="image"className="input-form"  onChange={handleChange}
          />
          </p>
          <p>
            <label>price</label>
            <input type="number" name="price"className="input-form" onChange={handleChange}
           />
          </p>
          <p>
            <label>Category</label>
            <input type="text" name="category" className="input-form" onChange={handleChange}
            />
          </p>
          <p className="full">
            <label>Description</label>
            <input name="mensaje" className="input-form" onChange={handleChange}
            ></input>
          </p>
          <p className="full">
            <button className="boton-enviar" onClick={handleSubmit}>CREATE</button>
          </p>
        </form>
      </div>
    </div>
  </div>
    </div>
  );
};

export default CreateProduct;
