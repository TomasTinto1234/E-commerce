import React, { useEffect, useState } from "react";


const CreateProduct= ({title, description, category, image, id, price})=>{

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            .then(console.log(title, description, category, image, price))
    })

    return (
        <div>
            <p>title</p>
         <input type="text">{title}</input>
         <p>price</p>
         <input type="text">{price}</input>
         <p>image</p>
         <input type="text">{image}</input>
         <p>category</p>
         <input type="text">{category}</input>
         <div>
         <button type="submit">create product</button>
         </div>
        </div>
    )

}

export default CreateProduct