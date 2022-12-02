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
        <div >
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
                  cartItem?.map((product) => {
                    return (
                      <div className="Cart-Container">
                        <div className="Header">
         <h3 className="Heading">Shopping Cart</h3>
         <h5 className="Action">Remove all</h5>
         </div>
         <div className="Cart-Items">
         <div className="image-box">
         <img src={product.image} alt={product.image} style={{ height:"120px" }} />
         </div>
         <div className="about">
         <h1 className="title">{product.title}</h1>
         <h3 className="subtitle">{product.category}</h3>
         {/* <img src={product.image} style={{ height:"30px" }}/> */}
         </div>
         <div className="counter"></div>
         <div className="prices"></div>
         </div>
         <div className="counter">
         <div className="btn">+</div>
         <div className="count"></div>
         <div className="btn">-</div>
         </div>
         <div className="prices">
         <div className="amount">{product.price}</div>
         {/* <div className="save"><u>Save for later</u></div> */}
         <div className="remove"><u>Remove</u></div>
         </div>
         {/* <hr>  </hr> */}
         <div className="checkout">
         <div className="total">
         <div>
         {/* <div className="Subtotal">Sub-Total</div>
         <div className="items">2 items</div> */}
         </div>
         <div className="total-amount">{product.price}</div>
         </div>
         {/* <button className="button">Checkout</button> */}
         </div>
        
                    </div>
                    );
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
