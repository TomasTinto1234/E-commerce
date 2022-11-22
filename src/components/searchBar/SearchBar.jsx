import React, { useState }  from "react";
import {BsSearch} from "react-icons/bs";

const SearchBar = ({title})=>{

    const [titles, setTitle] = useState("");

    function handleInputChange(e) {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        if(title === e.target.value ){
          setTitle(e.target.value)
        } else{
          alert("no se encuentra")
        }
    }

    return (
          <div >
         <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>

<form action="">
  <input type="search" required/>

  <a href="javascript:void(0)" id="clear-btn"><i onClick={(e)=>handleSubmit(e)} class="fa fa-search"></i></a>
</form>
            </div>
      );
}

export default SearchBar