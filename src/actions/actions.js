import axios from "axios";

export const TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
    REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
  };
  export const GET_FAVORITES_PRODUCTS = "GET_FAVORITES_PRODUCTS";


  export function getFavsProducts(id) {
    return async function (dispatch) {
      try {
        fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function clean() {
    return {
      type: "CLEAN",
    };
  }