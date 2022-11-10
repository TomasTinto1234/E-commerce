import React from "react";
import { useEffect, useState } from "react";

const Categories = () => {
    
  const [allCategories, SetAllCategories] = useState("");
  console.log(allCategories)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => 
      SetAllCategories([json])
      )
      .catch((err) => {
        console.log(err);
      });
  },[]);

  // const getCategory = async () => {
  //   await fetch("https://fakestoreapi.com/products/categories")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     SetAllCategories(json);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  return (
  <div>
     <section id="categories">
        <div>
            <h2>categories: {allCategories+" "}</h2>
            <select class="btn">
              <select hidden={true}>categories</select>
              {allCategories&&allCategories.map((categories)=> {
                  <label key ={categories} value={categories}>{categories}</label>   
              })}
            </select>
        </div>
      </section>
  </div>)
}

export default Categories;
