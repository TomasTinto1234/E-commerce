import React from "react";
import { useEffect, useState } from "react";

const SingleUser = ({id, }) => {
  const [user, setUser] = useState("");

  useEffect((id) => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((json) => setUser(json))
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      {user &&
        user.map((user) => {
          return (
            <div>
              <h2>title: {user.id}</h2>
              {/* <h2>Price: {user.price}</h2> */}
              <h2></h2>
              <h2></h2>
              <img />
            </div>
          );
        })}
    </div>
  );
}

export default SingleUser;
