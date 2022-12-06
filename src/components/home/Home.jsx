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
import {
  BsCart4
} from "react-icons/bs";

const Home = (props) => {
  const [, /*allCategories*/ setAllCategories] = useState({});
  const [allProducts /*setAllProducts*/] = useState(AllProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage /*setPerPage*/] = useState(5);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const { onAdd } = props;

  // const [activo, setActivo]= useState(false)

  // const toggler =()=>{
  //   setActivo(!activo)
  // }

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

  useEffect(() => {
    getCategory();
    // select()
  }, []);

  //  function getCat(categ){
  //   console.log(categ)
  //    const cat = allProducts.find((e)=> e.category === categ)
  //    return cat
  //  }

  const getCategory = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setAllCategories(json);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // function handleSort(e) {
  //   // dispatch(orderByName(e));
  //   // setOrden(e);
  // }

  // const select = (e)=>{
  //  if(currentProducts.category=== e){
  //   setAllProducts(currentProducts.category)
  //  }
  // }

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
        </div>
      {/* <div className="contenedorCard"> */}
      {currentProducts.length === 0 ? (
        <Spinner />
      ) : (
        
        currentProducts &&
        currentProducts?.map((product) => {
          return (
            <div className="contenedorPadre">
            <table  key={product.id} className="table">
                <div>
                  <div
                    key={product.id}
                    id="container"
                    className="products-card"
                  >
                    <div className="product-details">
                      <h1>{product.title}</h1>
                      <p>⭐{product.rating.rate}</p>
                      <p>${product.price}</p>
                      <div>
                            <button
                              className="btn"
                              onClick={() => {
                                onAdd(product);
                                
                              }}
                              >
                              <span key={product.id} >Add To <BsCart4 color="black"
                size="30px"
                cursor="pointer"/></span>
                            </button>
                      </div>
                    </div>
                    <div className="product-image">
                      <img src={product.image} height="250" width="250" />
                      <div className="info">
                        <div className="control">
                        <a href={`/SingleProduct/${product.id}`}>
                          <button className="btn">
                            <span>Read more</span>
                          </button>
                        </a>
                          <div>
                          </div>
                        </div>
                        <h5>{product.description}</h5>
                      </div>
                    </div>
                  </div>
                </div>
            </table>
        </div>
          );
        })
      )}
        </div>
      <Pagination
        productsPerPage={productsPerPage}
        allProducts={allProducts.products.length}
        paginado={paginado}
        />
      <Marquee />
    </div>
        // </div>
  );
};

export default Home;
