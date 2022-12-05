import React, { /*useState,*/ } from "react";
import "./carrito.css";
import Spinner from "../Spinner/Spinner"

const Carrito = (props) => {
//  const {id} = useParams()
// const [product, /*setProduct*/] = useState([])
 const {cartItem, countCartItems, onRemove} = props
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
         <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col" class="border-0 bg-light">
                              <div class="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="py-2 text-uppercase">Remove</div>
                            </th>
                          </tr>
                        </thead>
                {/* <h1 scope="col" className="jpy">
                  Cart
                </h1> */}
                {cartItem.length === 0?(
                  <div>
                 <h1>The Cart Is Empty</h1>
                  <Spinner/>
                  </div>
                ):(
                  cartItem?.map((product) => {
                    return (
                    
                        <tbody>
                          <tr>
                            <th scope="row" class="border-0">
                              <div class="p-2">
                                <img src={product.image} alt=""height="350" width="250" />
                                <div class="ml-3 d-inline-block align-middle">
                                  <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{product.title}</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: {product.category}</span>
                                </div>
                              </div>
                            </th>
                            <td class="border-0 align-middle"><strong>{product.price}</strong></td>
                            <td class="border-0 align-middle"><strong>{product.qty}</strong></td>
                            <td class="border-0 align-middle"><button class="text-dark" onClick={() =>onRemove(product)}>X</button></td>
                          </tr>
                        </tbody>
                    );
                  })
                  )}
                  </table>
                </div>
              </div>
  );
};

export default Carrito;
