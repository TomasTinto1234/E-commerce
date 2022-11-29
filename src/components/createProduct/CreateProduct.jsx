import React, { useEffect, useState } from "react";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

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
  e.preventDefault()
  const product = {
    // id:id,
    title,
    category,
    description,
    price,
    image,
  }
  }

  return (
    <div id="createProduct">
      <form onSubmit={handleSubmit}>
        <div>
        <div>
          <div>title</div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          ></input>
        <div>
          <div>price</div>
          <input
            type="text"
            name="price"
            onChange={handleChange}
            value={price}
            ></input>
        </div>
            </div>
        <div>
          <div>image</div>
          <input
            type="text"
            name="image"
            onChange={handleChange}
            value={image}
          ></input>
        </div>
        <div>
          <div>category</div>
          <input
            type="text"
            name="category"
            onChange={handleChange}
            value={category}
          ></input>
        </div>
        <div>
          <div>description</div>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={description}
          ></input>
        </div>
        <h1>title: {title}</h1>
        <h1>description: {description}</h1>
        <h1>category: {category}</h1>
        <h1>image: {image}</h1>
        <h1>price: {price}</h1>

        </div>
        <input type="submit" value="create product"/>
      </form>
      <div>
        <button type="submit">create product</button>
      </div>
    </div>
  );
};

export default CreateProduct;
