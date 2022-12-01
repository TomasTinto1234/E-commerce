import React, { useState, useEffect } from "react";
import "./navBar.css";
import Detail from "../detail/Detail";
import Pagination from "../paginacion/Paginacion";
import SearchBar from "../searchBar/SearchBar";
import AllProducts from "../../products";
import { Link } from "@chakra-ui/react";
import Spinner from "../Spinner/Spinner"

const Home = () => {
  const [/*allCategories*/, setAllCategories] = useState({})
const [allProducts, /*setAllProducts*/] = useState(AllProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage /*setPerPage*/] = useState(5);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.products?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
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

  useEffect(()=>{
    getCategory()
    // select()
 },[])

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
  }
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
    <div className="home">
      <div className="colour"></div>
    <div className="colour"></div>
    <div className="colour"></div>
      <section>
      <div className="colour">
       <div className="card text-white bg-success mb-3" >
                  <marquee className="text-dark" >
                    - E-COMMERCE Tomas Tinto - <a href="https://porfolio-8sla.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a> - Entra a mi portfolio para mas proyectos - <a href="https://porfolio-8sla.vercel.app/" target="_blank" rel="noopener noreferrer">Link</a> . 
                  </marquee>
              </div>
              <div >
        <SearchBar currentProducts={currentProducts} />
                </div>
        <div >
    </div>
      </div>
      <span>
      <select className="losul" >
            <option hidden={true}>By Name</option>
            <option value="az">a-z</option>
            <option value="za">z-a</option>
          </select>
      </span>
      <Pagination
        productsPerPage={productsPerPage}
        allProducts={allProducts.products.length}
        paginado={paginado}
      />
        {currentProducts.length === 0 ? (
          <div>
            <Spinner/>
          </div>
        ) : (currentProducts &&
          currentProducts?.map((product) => {
            return (
              <div key={product.id} id="products" className="one-card">
                {/* <a onClick={() => refresh(product.id)}> */}
                <Link to={`/SingleProduct/${product.id}`}>
                  <Detail
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    price={product.price}
                    rating={product.rating.rate}
                    ></Detail>
                    </Link>
                {/* </a> */}
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
