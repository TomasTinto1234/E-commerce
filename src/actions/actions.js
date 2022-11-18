  export const GET_FAVORITES_PRODUCTS = "GET_FAVORITES_PRODUCTS";
  export const CURRENT_PAGE = "CURRENT_PAGE"
  export const ADD_FAVORITE = "ADD_FAVORITE"
  export const ADD_TO_CART = "ADD_TO_CART"
  export const REMOVE_ONE_FROM_CART= "REMOVE_ONE_FROM_CART"
  export const REMOVE_ALL_FROM_CART= "REMOVE_ALL_FROM_CART"
  export const CLEAR_CART= "CLEAR_CART"


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

  export function addFavorite(cart) {
    return { 
        type: "ADD_FAVORITE", 
        cart
    };
  }

  export const setCurrentPage = payload => {
    return dispatch => {
        dispatch({ type: "CURRENT_PAGE", payload })
    }
};