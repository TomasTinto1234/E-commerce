import React, { useState, useEffect } from "react";
import "./navBar.css";
import "./home.css";
import Detail from "../detail/Detail";
import Pagination from "../paginacion/Paginacion";
import SearchBar from "../searchBar/SearchBar";
import AllProducts from "../../products";
import { Link } from "@chakra-ui/react";
import Spinner from "../Spinner/Spinner";
import Marquee from "../Marquee/Marquee";
import Carrusel from "../Carrusel/Carrusel";
import { BsCart4 } from "react-icons/bs";

const Home = (props) => {
  const [, /*allCategories*/ setAllCategories] = useState({});
  const [allProducts /*setAllProducts*/] = useState(AllProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage /*setPerPage*/] = useState(12);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const { onAdd } = props;
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setAllProducts(json)
  //     clean()
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const refresh = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setAllProducts(json))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products?sort=desc')
  //   .then(res=>res.json())
  //   .then(json=>{
  //     // console.log(json)
  //     setOrden(json)
  //   })
  // },[])

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products?sort=asc')
  //   .then(res=>res.json())
  //   .then(json=>{
  //     // console.log(json)
  //     setOrden(json)
  //   })
  // },[])
  return (
    <div>
      <div className="elHome">
        <div>
          <Marquee />
          <div>
            <SearchBar currentProducts={currentProducts} />
          </div>
          <Pagination
            productsPerPage={productsPerPage}
            allProducts={allProducts.products.length}
            paginado={paginado}
          />
          <div className="homeContainer">
            {currentProducts.length === 0 ? (
              <Spinner />
            ) : (
              currentProducts &&
              currentProducts?.map((product) => {
                return (
                  <div className="mains" key={product.id}>
                    <ul className="cards">
                      <li className="cards_item">
                        <div className="card">
                          <div className="card_image">
                            <img src={product.image} />
                          </div>
                          <div className="card_content">
                            <h2 className="card_title">{product.title}</h2>
                            <span className="card_text">
                              {product.category}
                            </span>
                            <a href={`/SingleProduct/${product.id}`}>
                              <button className="btn">
                                <span>Read more</span>
                              </button>
                            </a>
                            <button
                              className="btn"
                              onClick={() => {
                                onAdd(product);
                              }}
                            >
                              <span key={product.id}>
                                Add To{" "}
                                <BsCart4
                                  color="black"
                                  size="30px"
                                  cursor="pointer"
                                />
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          allProducts={allProducts.products.length}
          paginado={paginado}
        />
      </div>
      <Marquee />
    </div>
  );
};

export default Home;
