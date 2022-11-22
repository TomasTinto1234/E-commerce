// import AllProducts from "../components/products";
export const shoppingInitialState = {
  products: [],
  allProducts : [],
  cart: [],
  favoritesProducts:[],
  paginate: [],
};

export default function shoppingReducer(state = shoppingInitialState , action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: [...state.products]
      }
    case "ORDER_BY_NAME":
      const orderProducts =
        action.payload === "az"
          ? state.allProducts.sort((a, b) => {
              if (a.id > b.id) {
                return 1;
              }
              if (b.id > a.id) {
                return -1;
              }
              return 0;
            })
          : state.allProducts.sort((a, b) => {
              if (a.id > b.id) {
                return -1;
              }
              if (b.id > a.id) {
                return 1;
              }
              return 0;
            });
            return {
              ...state,
              products: orderProducts,
            };


    case "CURRENT_PAGE":
      return {
          ...state,
          paginate: { ...state.paginate, currentPage: action.payload }
      }
    case "REMOVE_ALL_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case "CLEAR_CART":
      return shoppingInitialState;

      case "CLEAN":
        return {
          ...state,
          detail: {},
        };

        case "ADD_TO_CART":
          let newItem = state.products.find((products)=> products.id === action.payload)
          console.log(newItem)
          return {
            cart:[...state.cart,newItem]
         };
         case "REMOVE_FROM_CART":
          return {

          }
          case "REMOVE_ALL_FROM_CART": {
            return {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload),
            };
          }
          case "CLEAR_CART":
            return shoppingInitialState;

    default:
      return state;
  }
}