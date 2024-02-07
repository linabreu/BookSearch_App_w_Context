import React from 'react';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import "./Header.css";


function Header() {
  return (
    <div className = "w-full">
      <header className = "header">
        <Nav/>
        <div className = "gradient">
          <div className = "hero-img w-full flex items-center justify-center">
            <div>
              <h1 className = "display-font text-4xl text-white font-bold text-center mb-10 blk-outline pr-1 pl-1 lg:text-5xl md:text-4xl">Explore Beyond the Pages</h1>
              <p className = "paragraph-font text-lg m-10 text-white text-center thin-blk-outline">
                Book Vault is your digital haven for literary exploration. 
                Seamlessly search, discover, and delve into a vast collection of books, 
                gaining instant access to a world of knowledge at your fingertips. 
                Unleash the power of Book Vault and elevate your reading experience!</p>
                <Search/>
            </div>
          </div>

        </div>
      </header>
    </div>
  )
}

export default Header