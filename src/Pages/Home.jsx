import React from 'react';
import Header from '../Components/Header/Header';
import Loader from '../Components/Loader/Loader';
import Booklist from '../Components/Booklist/Booklist';
import Footer from '../Components/Footer/Footer';
import BookDetails from '../Components/BookDetails/BookDetails';
import Book from '../Components/Booklist/Book';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className = "bg-fuchsia-50">
        <Header/>
        <Outlet/>
        <Booklist/>
        <Footer/>


    </div>
  )
}

export default Home