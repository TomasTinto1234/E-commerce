import React, { useState }  from "react";
import {BsSearch} from "react-icons/bs";

const SearchBar = ({title})=>{

    const [titles, setTitle] = useState("");

    function handleInputChange(e) {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        if(title.includes(e.target.value) ){
          setTitle(e.target.value)
        } else{
          alert("no se encuentra")
        }
    }

    return (
          <div class="field">
          <input
       
            type="input"
            placeholder="Products name..." 
            onChange={(e) => handleInputChange(e)}
            />
          <label type="submit" onClick={(e)=> handleSubmit(e)}><BsSearch/></label>
          {/* <span class="field__label">Products name</span> */}
            </div>
      );
}

export default SearchBar