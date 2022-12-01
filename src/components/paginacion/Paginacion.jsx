import React from "react";
import "./pagination.css"
import {setCurrentPage} from "../../actions/actions"
import { useDispatch, useSelector } from "react-redux";


const Paginations = ({ productsPerPage, allProducts, paginado }) => {

  const dispatch = useDispatch()
  const paginate = useSelector(state => state.paginate);
  const products = useSelector(state => state.allProducts)
  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(allProducts / productsPerPage); i++) {
    pageNumbers.push(i+1);
  }

const handlePrevious = () => {
    if (paginate.currentPage > 1) dispatch(setCurrentPage(paginate.currentPage - 1))
}
  
const handleNext = () => {
    if (paginate.currentPage < products[products.length - 1]) dispatch(setCurrentPage(paginate.currentPage + 1))
}

  return (
    <nav className='pagination'>
      {pageNumbers > 1 && <li className="pagli" onClick={() => handlePrevious()}>{'<'}</li>}
      {pageNumbers &&
        pageNumbers.map((number) => (
          <ul  key={number}>
            <li className={'pagli'} onClick={() => paginado(number)}>
              <a className='pagspan'>{number} </a>
            </li>
          </ul>
        ))
        
      }
      {pageNumbers > 1 && <li className="pagli" onClick={() => handleNext()}>{'>'}</li>}
    </nav>
  );
};

export default Paginations;
