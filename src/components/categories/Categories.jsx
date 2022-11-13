import React from "react";
import { useEffect, useState } from "react";

const Categories = ({category}) => {
    
  const [allCategories, SetAllCategories] = useState("");
  // console.log(allCategories)

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
  <div className="products-card">
     <section id="categories">
        <div>
            {/* <h2>categories: {allCategories+" "}</h2> */}
            <h2>category: {category}</h2>
            {/* <select class="btn">
              <option hidden={true}>categories</option>
              {category&&category.map((categories)=> {
                <option key ={categories} value={categories}>{categories}</option>   
              })}
            </select> */}
        </div>
      </section>
  </div>)
}

export default Categories;
