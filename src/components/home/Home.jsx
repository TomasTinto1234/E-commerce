import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../products/Products";
import "./navBar.css";
import SingleProduct from "../singleProduct/SingleProduct";
import User from "../users/Users";
import Categories from "../categories/Categories.jsx";
import Carrito from "../carrito/Carrito";
import Login from "../login/Login";
import Detail from "../detail/Detail";
import CreateProduct from "../createProduct/CreateProduct";
import Pagination from "../paginacion/Paginacion";
import SearchBar from "../searchBar/SearchBar";

const Home = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState("");
  // const favoritesProducts = useSelector((state) => state.favoritesProducts);
  const [shopProduct /*setShopProduct*/] = useState("");
  const [allCategories, SetAllCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage /*setPerPage*/] = useState(3);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // console.log(allCategories)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const refresh = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => SetAllCategories(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getProductId = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAllProducts([json]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="botones">
        <SearchBar title={allProducts.title} />
        <Categories className="losul" category={allCategories.map((e) => e)} />
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
      />
      <section id="products">
        {allProducts.length === 0 ? (
          <div className="spinner">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        ) : (
          currentProducts?.map((product) => {
            return (
              <div key={product.id}>
                {/* <Link to= {`/detail/${product.id}`}> */}
                <a onClick={() => getProductId(product.id)}>
                  <Detail
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    price={product.price}
                    rating={product.rating.rate}
                  ></Detail>
                </a>
                {/* <Categories
                   category={product.category}
                   > */}
                {/* </Categories> */}
                {/* <SingleProduct id={product.id}
                title= {product.title}
                description={product.description}
                category={product.category}
                image={product.image}
                price={product.price}></SingleProduct> */}
                {/* </Link> */}
              </div>
            );
          })
        )}
      </section>
      <Pagination
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
      />
      {/* <Login/> */}
      {/* <Carrito/> */}
      {/* <Categories/> */}
      {/* <Products/>
        <CreateProduct/> */}
      {/* <SingleProduct/> */}
      {/* <Detail/> */}
      {/* <Paginations/> */}
      {/* <SingleProduct/> */}
      {/* <User/> */}
    </div>
  );
};

export default Home;
