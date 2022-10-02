import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.stringify(Cookies.get("cartItems"))
      : [],
    shippingAddress: Cookies.get("shippingAddress")
      ? JSON.stringify(Cookies.get("shippingAddress"))
      : {},
  },
  userInfo: Cookies.get("userInfo")
    ? JSON.stringify(Cookies.get("userInfo"))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };
    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      console.log("from store ", newItem);
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];

      Cookies.set("cartItems", JSON.stringify(cartItems));
      console.log("cart items", cartItems);
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "UPDATE_QUANTITY SIZE": {
      const newSize = action.payload;
      console.log("new size ", newSize);
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newSize._id && item.size._id === newSize.size._id
      );
      console.log("existItem ", "existItem");
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.size._id === existItem.size._id ? newSize : item
          )
        : [...state.cart.cartItems, newSize];
      // Cookies.set("cartItems", JSON.stringify(cartItems));
      console.log("cart items", cartItems);
      // return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => {
          if (item && item.size) {
            return item.size._id !== action.payload._id;
          }
          //  item.size._id !== action.payload._id;
        } //item.size._id !== action.payload.item.size._id
      );
      // console.log("old cartItems", state.cart.cartItems);
      // console.log("action.payload._id", action.payload._id);
      // console.log("new cartItems", cartItems);
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      return { ...state, userInfo: null, cart: { cartItems: [] } };

    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        cart: { ...state.cart, shippingAddress: action.payload },
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
