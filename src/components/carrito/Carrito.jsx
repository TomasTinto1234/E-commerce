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
          <div id="carrito" >
            <div >
              <div >
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
                     
<div class="shopping-cart">

<div class="column-labels">
  <label class="product-image">{product.image}</label>
  <label class="product-details">Product</label>
  <label class="product-price">Price</label>
  <label class="product-quantity">Quantity</label>
  <label class="product-removal">Remove</label>
  <label class="product-line-price">Total</label>
</div>

<div class="product">
  <div class="product-image">
    <img src={product.image}/>
  </div>
  <div class="product-details">
    <div class="product-title">Dingo Dog Bones</div>
    <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
  </div>
  <div class="product-price">12.99</div>
  <div class="product-quantity">
    <input type="number" value="2" min="1"/>
  </div>
  <div class="product-removal">
    <button class="remove-product">
      Remove
    </button>
  </div>
  <div class="product-line-price">25.98</div>
</div>

<div class="product">
  <div class="product-image">
    <img src={product.image}/>
  </div>
  <div class="product-details">
    <div class="product-title">Nutro™ Adult Lamb and Rice Dog Food</div>
    <p class="product-description">Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!</p>
  </div>
  <div class="product-price">45.99</div>
  <div class="product-quantity">
    <input type="number" value="1" min="1"/>
  </div>
  <div class="product-removal">
    <button class="remove-product">
      Remove
    </button>
  </div>
  <div class="product-line-price">45.99</div>
</div>

<div class="totals">
  <div class="totals-item">
    <label>Subtotal</label>
    <div class="totals-value" id="cart-subtotal">71.97</div>
  </div>
  <div class="totals-item">
    <label>Tax (5%)</label>
    <div class="totals-value" id="cart-tax">3.60</div>
  </div>
  <div class="totals-item">
    <label>Shipping</label>
    <div class="totals-value" id="cart-shipping">15.00</div>
  </div>
  <div class="totals-item totals-item-total">
    <label>Grand Total</label>
    <div class="totals-value" id="cart-total">90.57</div>
  </div>
</div>
    
    <button class="checkout">Checkout</button>

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
