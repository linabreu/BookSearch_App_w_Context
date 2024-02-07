import React, { useContext, useEffect, useRef } from 'react';
import { BookContext } from '../../Contexts/Context';
import Loader from '../Loader/Loader';
import noCover from '../../Images/No_Cover.jpg'
import Book from './Book';


function Booklist() {

  //https://covers.openlibrary.org/b/id/240727-S.jpg

  const {books, loading, resultTitle}= useContext(BookContext);
  //console.log(books)
  //console.log(resultTitle)

  const booksWithCovers = books.map((book, index) => {
    return{
      ...book,
      id:(book.id).replace("/works/", ""),
      cover_img: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`: noCover
    }
  })

  //console.log(booksWithCovers)


  return (
    <div className = " mt-0">
      <h2 className = "text-center pt-10 mb-10 text-4xl bold paragrap-font">{resultTitle}</h2>
      {/*{books ==[] ? <div></div> : <hr class="h-px my-8 bg-fuchsia-800 border-0 w-1/4 m-auto"></hr>}*/}
      {books.length == 0 ? <div></div>: <div><hr className="h-px my-8 bg-fuchsia-800 border-0 w-1/4 m-auto"></hr><p className="text-center paragraph-text">Click the book titles to learn more about each book!</p></div>}
      
      { loading ? <Loader/> : <div></div> }
      <div className = "book-grid grid grid-cols-1 gap-1 lg:grid-cols-4 gap-1 md:grid-cols-2 gap-1">
        {booksWithCovers.map((book,index) => {
          return(
            <Book key = {index} {...book}/>
          )
        })}
      </div>
  </div>
  )
}

export default Booklist