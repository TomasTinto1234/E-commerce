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
              <option hidden={true}>categories</option>
              {allCategories[0]?.map((categories)=> {
                for (let i = 0; i < categories.length; i++) {
                  <option key ={categories} value={allCategories}>{categories}</option>   
                }
              })}
            </select>
        </div>
      </section>
  </div>)
}

export default Categories;
