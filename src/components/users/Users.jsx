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
  });

  return (
  <div>
     <section id="users">

   {allUser && allUser.map((user)=> {
     return (
        <div key={user.id}>
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
