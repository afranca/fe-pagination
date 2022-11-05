import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const changePageHandler = (numb) =>{
    //console.log(numb);
    paginate(numb);
  };  

  const pageNumbers = [];      

  for (let i =1; i<= Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(i);
  }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map( (number) => (
                <li key={number} className="page-item">
                    <a href='!#' className='page-link' onClick={ () => changePageHandler(number) }>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination