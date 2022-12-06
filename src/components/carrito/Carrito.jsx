import React /*useState,*/ from "react";
import "./carrito.css";
import Spinner from "../Spinner/Spinner";
import Marquee from "../Marquee/Marquee";
import { useNavigate } from 'react-router'
import {
  BsHouse
} from "react-icons/bs";

const Carrito = (props) => {
  const { cartItem, countCartItems, onAdd, onRemove, vaciarCarrito, onKick, onSum } = props;
  console.log(cartItem);
  console.log(countCartItems);
  const navigate = useNavigate()

  const totalCantidad = () => {
    return cartItem.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const totalCompra = () => {
    return cartItem.reduce((acc, prod) => acc + prod.price, 0);
  };

  const isInCart = (id) => {
    return cartItem.some((prod) => prod.id === id);
  };
  
  const handleToIndex = () => {
    navigate('/')
}

  return (
    <div>

      <div className="table-responsive">
      <button className="btn" onClick={handleToIndex}><span>Back<BsHouse color="black"
                size="35px"
                cursor="pointer"/></span></button>
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
          {cartItem.length === 0 ? (
            <div>
              <h1  className="border-0 align-middle">Cart Empty</h1>
            </div>
          ) : (
            cartItem?.map((product) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row" className="border-0">
                      <div className="p-2">
                        <img
                          src={product.image}
                          alt=""
                          height="350"
                          width="250"
                          className="img-carrito"
                        />
                        <div className="ml-3 d-inline-block align-middle">
                          <h5 className="mb-0">
                            {" "}
                            <a
                              href={`/SingleProduct/${product.id}`}
                              className="text-dark d-inline-block align-middle"
                            >
                              {product.title}
                            </a>
                          </h5>
                          <span className="text-muted font-weight-normal font-italic d-block">
                            Category: {product.category}
                          </span>
                        </div>
                      </div>
                    </th>
                    <td className="border-0 align-middle">
                      <strong>${product.price}</strong>
                    </td>
                    <td className="border-0 align-middle">
                      <button className="btn" onClick={onKick}>
                        <span>-</span>
                      </button>
                      <strong>|{product.qty}|</strong>
                      <button className="btn" onClick={onSum}>
                        <span>+</span>{" "}
                      </button>
                    </td>
                    <td className="border-0 align-middle">
                      <button className="btn" onClick={() => onRemove(product)}>
                        <span>remove</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })
          )}
          <h1 className="border-0 align-middle">
            <strong>Total: {totalCompra()}</strong>
          </h1>
          <button className="btn" onClick={vaciarCarrito}>
            <span>Clean Cart</span>
          </button>
        </table>
      </div>
      <Marquee />
    </div>
  );
};

export default Carrito;
