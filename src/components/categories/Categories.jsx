import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Categories = ({ category }) => {
  const [allCategories, SetAllCategories] = useState("");
  const cat = useSelector(state => state.allProducts)
  // console.log(category)

  // console.log(allCategories)

  
  const getCategory = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => {
      SetAllCategories(json);
    })
    .catch((err) => {
        console.log(err);
    });
  }
  
  function handleSort(category){
    try {
      if(category){
        // console.log("soy category: " +category)
       const pCat =  allCategories.filter(e=>category.includes(category[e]))
       console.log("soy pCat: " + pCat)
       return pCat
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="products-card">
      <section id="categories">
        <div>
          {/* <h2>categories: {allCategories+" "}</h2> */}
          {/* <h2>category: {category}</h2> */}
          <select  onChange={(e) => handleSort(e)} name="category" id="category">
            <option value={allCategories}>category</option>
            <option value={category[0]}>{category[0]}</option>
            <option value={category[1]}>{category[1]}</option>
            <option>{category[2]}</option>
            <option>{category[3]}</option>
          </select>
          {/* <select class="btn">
              <option hidden={true}>categories</option>
              {category&&category.map((categories)=> {
                <option key ={categories} value={categories}>{categories}</option>   
              })}
            </select> */}
        </div>
      </section>
    </div>
  );
};

export default Categories;
