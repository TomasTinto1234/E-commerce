import React from "react";
import "./products.css";
import Spinner from "../Spinner/Spinner"

const GetAllProducts = (props) => {
  const {cartItem} = props

  return (
    <div>
      <section id="products">
        {cartItem.length === 0 ? (
          <div>
          <Spinner/>
          </div>
        ) : (
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
      </section>
    </div>
  );
};

export default GetAllProducts;
