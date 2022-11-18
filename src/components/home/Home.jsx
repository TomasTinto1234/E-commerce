import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./navBar.css";
import Categories from "../categories/Categories.jsx";
import Detail from "../detail/Detail";
import CreateProduct from "../createProduct/CreateProduct";
import Pagination from "../paginacion/Paginacion";
import SearchBar from "../searchBar/SearchBar";

const Home = () => {
  window.scrollTo(0, 0);
  // const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState("");
  const [shopProduct /*setShopProduct*/] = useState("");
  const [allCategories, SetAllCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage /*setPerPage*/] = useState(5);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      .then((json) => {SetAllCategories(json)
        setCurrentPage(1)})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getProductId = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setAllProducts([json])
        setCurrentPage(1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      <div className="colour"></div>
    <div className="colour"></div>
    <div className="colour"></div>
      <div className="colour">
        {/* <Carrito/> */}
        <SearchBar title={allProducts.title} />
        <Categories className="losul" category={allCategories} setCurrentPage={setCurrentPage} />
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
      />
      <section id="products">
        {currentProducts.length === 0 ? (
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
        ) : (currentProducts &&
          currentProducts?.map((product) => {
            return (
              <div key={product.id} id="products">
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
    </div>
  );
};

export default Home;
