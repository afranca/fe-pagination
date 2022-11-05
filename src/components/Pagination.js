import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate,currentPage }) => {
  const changePageHandler = (numb) =>{
    //console.log(numb);
    if (numb < 1){
        numb = 1;
    }
    if (numb > Math.ceil(totalPosts/postsPerPage)){
        numb = Math.ceil(totalPosts/postsPerPage);
    }
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
        <li key={Math.random()} className="page-item">
            <a href='!#' className='page-link' onClick={ () => changePageHandler(1) }>
                «
            </a>    
        </li>
        <li key={Math.random()} className="page-item">
            <a href='!#' className='page-link' onClick={ () => changePageHandler(currentPage-1) }>
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
            <a href='!#' className='page-link' onClick={ () => changePageHandler(currentPage+1) }>
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