import React, { useState, useEffect }  from "react";
import {BsSearch} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import  AllProducts from "../products"


const SearchBar = ({currentProducts})=>{
  // console.log(currentProducts)
    const [titles, setTitle] = useState([]);
    // console.log(titles)
    const products = useSelector(state => state.products)
// console.log(products)


useEffect(()=>{
    
},[])

    function handleInputChange(e) {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
      // console.log(currentProducts)
        if(currentProducts.filter((e) => e.id === currentProducts.id)){
          // console.log(currentProducts)
          setTitle(e.target.value)
        } else{
          alert("no se encuentra")
        }
    } 

    return (
          <div >
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>

<form action="">
  <input type="search"  onChange={(e) => handleInputChange(e)} required/>
  <a id="clear-btn"><i onClick={(e)=>handleSubmit(e)} class="fa fa-search"></i></a>
</form>
            </div>
      );
}

export default SearchBar