import React, { /*useState,*/ } from "react";
import "./carrito.css";
import Spinner from "../Spinner/Spinner"
import Marquee from "../Marquee/Marquee";

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
         <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col" className="border-0 bg-light">
                              <div className="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                              <div className="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                              <div className="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                              <div className="py-2 text-uppercase">Remove</div>
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
                            <th scope="row" className="border-0">
                              <div className="p-2">
                                <img src={product.image} alt=""height="350" width="250" className="img-carrito"/>
                                <div className="ml-3 d-inline-block align-middle">
                                  <h5 className="mb-0"> <a href={`/SingleProduct/${product.id}`} className="text-dark d-inline-block align-middle">{product.title}</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: {product.category}</span>
                                </div>
                              </div>
                            </th>
                            <td className="border-0 align-middle"><strong>${product.price}</strong></td>
                            <td className="border-0 align-middle"><button className="btn"><span>+</span> </button><strong>|{product.qty}|</strong><button className="btn"><span>-</span></button></td>
                            <td className="border-0 align-middle"><button className="btn" onClick={() =>onRemove(product)}><span>remove</span></button></td>
                          </tr>
                        </tbody>
                    );
                  })
                  )}
                  </table>
                </div>
                <Marquee/>
              </div>
  );
};

export default Carrito;
