import React from 'react';
import BookDetailsHeader from '../Components/BookDetailsHeader/BookDetailsHeader';
import ReadingListContents from '../Components/ReadingListContents/ReadingListContents';
import Footer from '../Components/Footer/Footer';

function ReadingList() {
  return (
    <div>
      <BookDetailsHeader headerText = "Saved Reads"/>
      <ReadingListContents/>
      <Footer/>
    </div>
  )
}

export default ReadingList