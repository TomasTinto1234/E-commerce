import React from 'react'

const ProductItem = ({data, addToCart}) => {
  let {id, title, category, image, price, rating, description} = data

  return (
    <div>
     <h4>{title}</h4>
     <h4>{category}</h4>
     <h4>{image}</h4>
     <h4>{price}$</h4>
     <h4>{rating}</h4>
     <h4>{description}</h4>
    <button onClick={() =>addToCart(id)}>agregar al carrito</button>
    </div>
  )
}

export default ProductItem