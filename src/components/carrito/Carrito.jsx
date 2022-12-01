import React, { /*useState,*/ } from "react";
import "./carrito.css";
// import Spinner from "../Spinner/Spinner"
import CartItem from "../CartItem/CartItem"

const Carrito = (props) => {
//  const {id} = useParams()
// const [product, /*setProduct*/] = useState([])
 const {cartItem} =props
 console.log(cartItem)
// const [carrito, setCarrito] = useState({})

// useEffect(()=>{
//   getProductId(id)
// },[])

// const getProductId =  (id) => {
//    fetch(`https://fakestoreapi.com/products/${id}`)
//      .then((res) => res.json())
//      .then((json) => {
//        console.log(json)
//        setProduct(json);
//      })
//      .catch((err) => {
//        console.log(err);
//      });
//  };
// const {title, description, category, image, price} = product

// const removerDelCarrito = (id) => {
//   setCarrito( carrito.filter(prod => prod.id !== id ) )
// }

// const vaciarCarrito = () => {
//   setCarrito([])
// }

// const totalCantidad = () => {
//   return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
// }

// const totalCompra = () => {
//   return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
// }

// const isInCart = (id) => {
//   return carrito.some( prod => prod.id === id )
// }

// const limpiarTodoElCarrito = () => {
//   setCarrito([]);
// };

// const addCart=(id)=>{
//   console.log(id)
//   dispatch({type: ADD_TO_CART, payload: id})
// }
// const deleteCart=()=>{}
// const clearCart=()=>{}

  return (
      <div className="carritos">
      {
    <div id="carrito">
         <div className="colour"></div>
    <div className="colour"></div>
    <div className="colour"></div>
      <div className="boxLogin">
      <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="container">
          <div id="carrito" className="formLogin">
            <div className="input__box">
              <div className="col-sm-4">
                <h1 scope="col" className="jpy">
                  Cart
                </h1>
                {cartItem.length=== 0?(
                 <h1>The Cart Is Empty</h1>
                ):(
                  cartItem?.map((product)=>{
                    return (
                      <div>
                        <h1>{product.title}</h1>
                        <h1>{product.image}</h1>

                      </div>
                    )
                    // <CartItem products={cartItem}/>
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
}
  </div>
  );
};

export default Carrito;
