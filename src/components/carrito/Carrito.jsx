import React, { /*useState,*/ } from "react";
import "./carrito.css";
import Spinner from "../Spinner/Spinner"

const Carrito = (props) => {
//  const {id} = useParams()
// const [product, /*setProduct*/] = useState([])
 const {cartItem, countCartItems} = props
 console.log(cartItem)
 console.log(countCartItems)
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
// console.log(JSON.stringify(cartItem))

  return (
      <div >
      {
    <div id="carrito">
        <div className="container">
          <div id="carrito" className="formLogin">
            <div className="input__box">
              <div className="col-sm-4">
                <h1 scope="col" className="jpy">
                  Cart
                </h1>
                {cartItem.length === 0?(
                  <div>
                  <Spinner/>
                 <h1>The Cart Is Empty</h1>
                  </div>
                ):(
                  cartItem?.map((product)=>{
                    return (
                      <div key={product.id}>
                        <h5>{countCartItems.length}</h5>
                        {/* <h1>{JSON.stringify(product)}</h1> */}
                        <h5>{product.title}</h5>
                        <h5>{product.image}</h5>

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
  
}
  </div>
  );
};

export default Carrito;
