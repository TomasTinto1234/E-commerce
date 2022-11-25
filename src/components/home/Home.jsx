import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./navBar.css";
import Categories from "../categories/Categories.jsx";
import Detail from "../detail/Detail";
import CreateProduct from "../createProduct/CreateProduct";
import Pagination from "../paginacion/Paginacion";
import SearchBar from "../searchBar/SearchBar";
import {orderByName, getProducts, clean} from "../../actions/actions"
import AllProducts from "../products";
import ShopingCart from "../ShopingCart.jsx"
import { Link } from "@chakra-ui/react";

const Home = () => {
  const dispatch = useDispatch();
  const [/*orden*/, setOrden] = useState("");
  const [allProducts, setAllProducts] = useState(AllProducts);
  const [shopProduct /*setShopProduct*/] = useState("");
  const [allCategories, SetAllCategories] = useState("");
  // console.log(allCategories)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage /*setPerPage*/] = useState(5);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const [activo, setActivo]= useState(false)

  const toggler =()=>{
    setActivo(!activo)
  }

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

  const refresh = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json))
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((json) => {SetAllCategories(json)
  //       setCurrentPage(1)
  //       clean()
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

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


  
  // const getCategory = async () => {
  //   await fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((json) => {
  //     // console.log(json)
  //     SetAllCategories(json.category);
  //     clean()
  //   })
  //   .catch((err) => {
  //       console.log(err);
  //   });
  // }
  const getProductId = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
       .then((res) => res.json())
       .then((json) => {
         console.log(json)
         setAllProducts([json]);
       })
       .catch((err) => {
         console.log(err);
       });
   };

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }

  return (
    <div className="home">
      <div className="colour"></div>
    <div className="colour"></div>
    <div className="colour"></div>
      <div className="colour">
        {/* <Carrito/> */}
       <div class="card text-white bg-success mb-3" >
                  <marquee class="text-dark" >
                    - E-COMMERCE compra OnLine - Entra a mi portfolio para mas proyectos - .
                  </marquee>
              </div>
        <SearchBar title={currentProducts} />
        {/* <Categories className="losul" category={allCategories}/> */}
        <div >
      <section id="categories">
        <div>
          {/* <h2>categories: {allCategories+" "}</h2> */}
          {/* <h2>category: {category}</h2> */}
          <span>
          <select className="span" >
            <option hidden={true}>Category</option>
            {currentProducts?.map((e)=>{
              <option value={e}>{e.category}</option>
            })
            
          }
          </select>
          </span>
          {/* <ShopingCart/> */}
          {/* <select class="btn">
              <option hidden={true}>categories</option>
              {category&&category.map((categories)=> {
                <option key ={categories} value={categories}>{categories}</option>   
              })}
            </select> */}
        </div>
      </section>
    </div>
      </div>
      <span>
      <select className="losul" onChange={(e) => handleSort(e)}>
            <option hidden={true}>Por Nombre</option>
            <option value="az">a-z</option>
            <option value="za">z-a</option>
          </select>
      </span>
      
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
