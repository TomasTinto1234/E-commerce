import React from "react";
import { useEffect, useState } from "react";

const Categories = () => {
    
  const [allCategories, SetAllCategories] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => 
      SetAllCategories(json)
      )
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
  <div>
     <section id="categories">
        <div>
            <h2>categories: {allCategories+" "}</h2>
            <select>
              <option hidden={true}>categories</option>
              {allCategories && allCategories.map((categories)=> {
                <option key ={categories} value={categories}>{categories}</option>
              })}
            </select>
        </div>
      </section>
  </div>)
}

export default Categories;
