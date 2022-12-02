import React, { useState,  }  from "react";



const SearchBar = ({currentProducts})=>{
  // console.log(currentProducts)
    const [/*titles*/, setTitle] = useState([]);

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
          <div  className='searchs'>
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"  ></link>

<form action="">
  <input type="search"  onChange={(e) => handleInputChange(e)} required/>
  <a id="clear-btn"><i onClick={(e)=>handleSubmit(e)} className="fa fa-search"></i></a>
</form>
            </div>
      );
}

export default SearchBar