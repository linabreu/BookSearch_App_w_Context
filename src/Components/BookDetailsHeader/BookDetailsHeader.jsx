import React from 'react';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import "./BookDetailsHeader.css";


function BookDetailsHeader(props) {
  return (
    <div className = "w-full">
      <header className = "header">
        <Nav/>
        <div className = "gradient">
          <div className = "hero-img-details w-full flex items-center justify-center">
            <div>
              <h1 className = "display-font text-5xl text-white font-bold text-center mb-10 blk-outline">{props.headerText}</h1>
            </div>
          </div>

        </div>
      </header>
    </div>
  )
}

export default BookDetailsHeader