import React from "react";
import "./pagination.css"

const Pagination = ({ productsPerPage, allProducts, paginado }) => {
  const pageNumbers = [];
  //redondea todos los personajes por los personajes por pagina
  for (let i = 0; i < Math.ceil(allProducts / productsPerPage); i++) {
    pageNumbers.push(i+1);
  }

  return (
    <nav>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <ul className="pagina" key={number}>
            <li  className="page-item" onClick={() => paginado(number)}>
              <a className="numero">{number} </a>
            </li>
          </ul>
        ))}
    </nav>
  );
};

export default Pagination;
