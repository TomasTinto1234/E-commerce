import React from 'react';
import ProductItem from '../components/ProductItem';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onAdd={onAdd}></ProductItem>
        ))}
      </div>
    </main>
  );
}