import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clean } from "../../actions/actions";
import AllProducts from "../products";

const Categories = () => {
  const [allCategories, setAllCategories] = useState([])
  // console.log(allCategories)
  useEffect(()=>{
    getCategory()
 },[])


  const getCategory = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => {
      setAllCategories(json);
    })
    .catch((err) => {
        console.log(err);
    });
  }
  
  // function handleSelect(categor){
  //   // console.log(categor)
  //   try {
  //     if(allCategories.map((e)=> e === categor)){
  //        return 
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div >
      <section>
        <div>
          {/* <h2>categories: {allCategories+" "}</h2> */}
          {/* <h2>category: {category}</h2> */}
          <select >
            <option>Category</option>
            {allCategories&&allCategories.map((e)=>{
              <option value={e}>{e}</option>
            })

            }
          </select>
         

        </div>
      </section>
    </div>
  );
};

export default Categories;
