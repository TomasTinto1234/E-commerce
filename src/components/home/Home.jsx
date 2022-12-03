import React, { useState, useEffect } from "react";
import "./navBar.css";
import "./home.css";
import Detail from "../detail/Detail";
import Pagination from "../paginacion/Paginacion";
import SearchBar from "../searchBar/SearchBar";
import AllProducts from "../../products";
import { Link } from "@chakra-ui/react";
import Spinner from "../Spinner/Spinner"
import Marquee from "../Marquee/Marquee"

const Home = (props) => {
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
    <div className="totalpag">
      {/* <div className="colour"></div>
    <div className="colour"></div>
    <div className="colour"></div> */}
      {/* <section> */}
      {/* <div className="colour"> */}
      <Marquee/>
              <div >
        <SearchBar currentProducts={currentProducts} />
                </div>
        <div >
    </div>
      {/* </div> */}
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
              // <div key={product.id} id="products" >
                // <div class="wrapper">
        <div class="cardt">
		<figure class="card__thumb">
			<img src={product.image} alt="Picture by Kyle Cottrell" height="350" width="250" class="card__image"/>
			<figcaption class="card__caption">
				<h2 class="card__title">{product.title}</h2>
				<p class="card__snippet">{product.category}</p>
				<a href={`/SingleProduct/${product.id}`} class="card__button">Read more</a>
        <button className="btn" onClick={()=>{onAdd(product)}}><span class="card__button">Add To Cart</span></button>
			</figcaption>
		</figure>


                {/* <a onClick={() => refresh(product.id)}> */}
                {/* <Link to={`/SingleProduct/${product.id}`}>
                  <Detail
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    price={product.price}
                    rating={product.rating.rate}
                    ></Detail>
                    <button className="btn" onClick={()=>{onAdd(product)}}><span>Add To Cart</span></button>
                  </Link> */}
                {/* </a> */}
                  </div>
                // </div>
              // </div>
            );
          })
        )}
      {/* </section> */}
      <Pagination
        productsPerPage={productsPerPage}
        allProducts={allProducts.products.length}
        paginado={paginado}
      />
            <Marquee/>
    </div>
  );
};

export default Home;
