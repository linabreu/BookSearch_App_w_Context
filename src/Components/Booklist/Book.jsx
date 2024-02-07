import React from 'react';
import { Link } from 'react-router-dom';
import BookDetails from '../BookDetails/BookDetails';
import { useContext } from 'react';
import "./Booklist.css";
import { RiHeartAddFill } from "react-icons/ri";
import { BookContext } from '../../Contexts/Context';

function Book(book) {

    const {readingList, addToReadingList} = useContext(BookContext)

  return (
    <div className = "bg-white mt-10 mb-10 mr-3 ml-3 rounded-md shadow book-item">
        <div className ="flex justify-center items-center pt-10">
            <img src = {book.cover_img} alt = "cover" className = "p-5 h-[250px]"/>
        </div>
        <div className = "text-center ">
        <Link to = {`/book/${book.id}`} {...book}>
                <div className = "mt-2 mt-2 mr-1 ml-1">
                    <h2 className = "text-2xl font-bold display-font md: text-lg">{book.title}</h2>
                </div>

                <div className = "mt-2 mr-1 ml-1">
                    <span className = "text-md text-center paragraph-font font-bold">Author: </span>
                    {book.author == undefined ? 
                    <span className = "text-md text-center paragraph-font">No Author Available</span>:
                    <span className = "text-md text-center paragraph-font">{book.author}</span>
                    }
                    
                </div>
                <div className = "mt-2 mr-1 ml-1">
                    <span className = "text-md text-center paragraph-font font-bold">Total Editions: </span>
                    <span className = "text-sm text-center paragraph-font">{book.edition_count}</span>
                </div>
                <div className = "mt-2 pb-10">
                    <span className = "text-md text-center paragraph-font font-bold">First Pubish Year: </span>
                    <span className = "text-sm text-center paragraph-font">{book.first_publish}</span>
                </div>
            </Link>
            <button 
            className="bg-sky-500 hover:bg-sky-700 text-white rounded p-2 mb-5 paragraph-font flex justify-center items-center m-auto"
            onClick={() => addToReadingList(book)}>
            Add to Reading List 
            <RiHeartAddFill fontSize = {20} className = "ml-2"/>
          </button>
        </div>

    </div>
  )
}

export default Book