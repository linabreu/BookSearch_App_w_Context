import React, { useContext, useEffect, useRef } from 'react';
import { BookContext } from '../../Contexts/Context';
import Loader from '../Loader/Loader';
import noCover from '../../Images/No_Cover.jpg'
import ReadingListItem from './ReadingListItem';


function ReadingListContents() {

  //https://covers.openlibrary.org/b/id/240727-S.jpg

  const {readingList, loading}= useContext(BookContext);
  console.log(readingList)

  return (
    <div className = " mt-0">
      <h2 className = "text-center pt-10 mb-10 text-4xl bold paragrap-font">Reading List</h2>
      <hr className="h-px my-8 bg-fuchsia-800 border-0 w-1/4 m-auto"></hr>
      {readingList.length == 0 ? <h2 className = "paragraph-text text-center mb-10">You don't have any saved reads!</h2>: 
      <div>
        <div className = "book-grid grid grid-cols-1 gap-1 lg:grid-cols-4 gap-1 md:grid-cols-2 gap-1">
        {readingList.map((readingItem,index) => {
                return(
                    <ReadingListItem key = {index} {...readingItem}/>
                )
                })}
        </div>
      </div>}
  </div>
  )
}

export default ReadingListContents