import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clean } from "../../actions/actions";
import AllProducts from "../products";

const Categories = ({ category }) => {
  const [allProducts, SetAllProducts] = useState(AllProducts)
  // console.log(allCategories)
  const products = document.getElementById("products")
  // console.log(products)
  // const cat = useSelector(state => state.allProducts)
  // console.log(category)

  // console.log(allCategories)

  // useEffect(() => {
  //   return ()=>{
  //     fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) =>{
  //       SetAllProducts(json)
  //       clean()
  //       })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }
  // }, []);

  
  const getCategory = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => {
      SetAllProducts(json);
      clean()
    })
    .catch((err) => {
        console.log(err);
    });
  }
  
  function handleSelect(categor){
    // console.log(categor)
    try {
      if(allProducts.category === categor){
          return categor
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div >
      <section id="categories">
        <div>
          {/* <h2>categories: {allCategories+" "}</h2> */}
          {/* <h2>category: {category}</h2> */}
          <select>
            <option>Category</option>
            {allProducts&&allProducts.map((e)=>{
              <option value={e.category}>{e.category}</option>
            })

            }
          </select>
        </div>
      </section>
    </div>
  );
};

export default Categories;
