import React from "react";
import { useEffect, useState } from "react";

const User = () => {
    
  const [allUser, setAllUser] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => 
      setAllUser(json)
      )
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const getUserId =  (id) => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAllUser([json]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   function handleClic(e) {
//     setAllUser(e)
// }

  return (
  <div className="products-card"> 
     <section id="users">
        
   {allUser && allUser.map((user)=> {
     return (
        <div key={user.id}>
           <button
                      className="btn"
                      onClick={() => getUserId(user.id)}
                    >
                      <span>select user</span>
                    </button>
            <h2>username: {user.username}</h2>
            <h2>name: {user.name.firstname + " " + user.name.lastname}</h2>
            <h2>email: {user.email}</h2>
            <h2>phone: {user.phone}</h2>
            <h2>address: {user.address.city + ", " + user.address.street + " " + user.address.number}</h2>
        </div>
      )
   })}

        </section>
  </div>)
}

export default User;
