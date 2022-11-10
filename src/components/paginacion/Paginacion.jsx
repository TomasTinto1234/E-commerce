import React from "react";
import "./pagination.css"

const Paginations = ({ productsPerPage, allProducts, paginado }) => {
  const pageNumbers = [];
  //redondea todos los personajes por los personajes por pagina
  for (let i = 0; i < Math.ceil(allProducts / productsPerPage); i++) {
    pageNumbers.push(i+1);
  }

  return (
    <nav className='pag'>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <ul className='pagination' key={number}>
            <li  className='pagination' onClick={() => paginado(number)}>
              <a className="select">{number} </a>
            </li>
          </ul>
        ))}
    </nav>
  );
};

export default Paginations;
