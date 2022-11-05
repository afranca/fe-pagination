import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

  const lastPageNumber = Math.ceil(totalPosts/postsPerPage);  
  const nextPage = currentPage+1;
  const previousPage = currentPage-1;

  const changePageHandler = (numb) =>{
    //console.log(numb);
    if (numb < 1){
        numb = 1;
    }
    if (numb > lastPageNumber){
        numb = lastPageNumber;
    }
    //console.log(numb);
    paginate(numb);
  };  

  const pageNumbers = [];      

  for (let i =1; i<=lastPageNumber; i++){
    pageNumbers.push(i);
  }
  return (
    <nav>
        <ul className='pagination'>
        <li key={Math.random()} className="page-item">
            <a href='!#' className='page-link' onClick={ () => changePageHandler(1) }>
                «
            </a>    
        </li>
        <li key={Math.random()} className="page-item">
            <a href='!#' className='page-link' onClick={ () => changePageHandler(previousPage) }>
                ⟨   
            </a>          
        </li>

            {pageNumbers.map( (number) => (
                <li key={number} className="page-item">
                    <a href='!#' className='page-link' onClick={ () => changePageHandler(number) }>
                        {number}
                    </a>
                </li>
            ))}

        <li key={Math.random()} className="page-item">
            <a href='!#' className='page-link' onClick={ () => changePageHandler(nextPage) }>
                ⟩
            </a>              
        </li>
        <li key={Math.random()} className="page-item">
            <a href='!#' className='page-link' onClick={ () => changePageHandler(Math.ceil(totalPosts/postsPerPage)) }>
                »
            </a>        
        </li>            
        </ul>
        Page: {currentPage}
    </nav>
  )
}

export default Pagination