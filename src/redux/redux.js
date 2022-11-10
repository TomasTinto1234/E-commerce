import { TYPES } from "../actions/actions";

export const shoppingInitialState = {
  products: [],
  cart: [],
  favoritesProducts:[],
  paginate: [],
};

export default function shoppingReducer(state = shoppingInitialState , action) {
  switch (action.type) {
    case TYPES.CURRENT_PAGE:
      return {
          ...state,
          paginate: { ...state.paginate, currentPage: action.payload }
      }
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //console.log(newItem);

      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
            favoritesProducts:[...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART:
      return shoppingInitialState;

      case TYPES.GET_FAVORITES_PRODUCTS:
      return {
        ...state,
        cart: action.payload,
        favoritesProducts: action.payload,
      };
    case TYPES.SET_FAVORITE:
      return {
        ...state,
      };
    case TYPES.REMOVE_FAVORITE:
      return {
        ...state,
      };

      case TYPES.CLEAN:
        return {
          ...state,
          detail: {},
        };
    default:
      return state;
  }
}