import React, {useState} from 'react'
import Basket from '../Basquet'
import Header from '../Header'
import Main from '../Main'
import Products from "../products/Products"

const CartItem = (props) => {
  const {products} = props
  console.log(products)
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  // const onRemove = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== product.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
  //       )
  //     );
  //   }
  // };
  return (
    <div>
      {products?.map((product)=>{
        return (
          <div>
            <Header countCartItems={cartItems.length}/>
            <Main products={products} onAdd={onAdd}/>
          <Products key={product} products={products}/>
          <Basket cartItems={cartItems}/>
          </div>
          )
      })}
    </div>
  )
}

export default CartItem