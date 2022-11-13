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
    })

    return (
        <div>
            <h1>title</h1>
         <input>{title}</input>
         <h1>price</h1>
         <input>{price}</input>
         <h1>image</h1>
         <input>{image}</input>
         <h1>category</h1>
         <input>{category}</input>
        </div>
    )

}

export default CreateProduct