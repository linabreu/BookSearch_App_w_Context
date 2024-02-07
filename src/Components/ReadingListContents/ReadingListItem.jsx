import React from 'react';
import { useContext } from 'react';
import { MdDeleteForever } from "react-icons/md";
import { BookContext } from '../../Contexts/Context';



function ReadingListItem(readingItem) {

const {readingList, removeFromReadingList} = useContext(BookContext);

  return (
    <div className = "bg-white mt-10 mb-10 mr-3 ml-3 rounded-md shadow book-item">
    <div className ="flex justify-center items-center pt-10">
        <img src = {readingItem.cover_img} alt = "cover" className = "p-5 h-[250px]"/>
    </div>
    <div className = "text-center ">
            <div className = "mt-2 pr-3 pl-3">
                <h2 className = "text-2xl font-bold display-font md: text-lg">{readingItem.title}</h2>
            </div>

            <div className = "mt-2">
                <span className = "text-md text-center paragraph-font font-bold">Author: </span>
                {readingItem.author == undefined ? 
                    <span className = "text-md text-center paragraph-font">No Author Available</span>:
                    <span className = "text-md text-center paragraph-font">{readingItem.author}</span>
                }
            </div>

        <button 
        className="bg-red-500 hover:bg-red-700 text-white rounded p-2 mt-3 mb-5 paragraph-font flex justify-center items-center m-auto"
        onClick={() => removeFromReadingList(readingItem.id)}>
        Remove
        <MdDeleteForever fontSize = {20} className = "ml-1"/>
      </button>
    </div>
</div>
  )
}

export default ReadingListItem