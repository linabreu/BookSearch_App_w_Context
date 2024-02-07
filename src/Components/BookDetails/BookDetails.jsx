import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../../Contexts/Context';
import { Link } from 'react-router-dom';
import noCover from '../../Images/No_Cover.jpg';
import "./BookDetails.css";
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Footer from '../Footer/Footer';
import BookDetailsHeader from '../BookDetailsHeader/BookDetailsHeader';

function BookDetails() {

 

  const URL = 'https://openlibrary.org/works/'
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {

      let newDesc; //need this for formatting descriptions
      try
      {
        const response = await fetch (`${URL}${id}.json`);
        const data = await response.json();
        console.log(data)

        if (data)
        {
          const {description, title, covers, subject_places, subject_times,subjects} = data;

          if(typeof description === 'object') //some descriptions in open lib are objects and some are just plain strings
          {
              newDesc = description.value;
              console.log(true);
          }
          else if (typeof description === 'string')
          {
              newDesc = description
          }
          const formattedBook = 
          {
            description: description ? newDesc: "No description avaialbe",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : noCover,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places available",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times available",
            subjects: subjects ? subjects.join(", ") : "No subjects available"
          }
          setBook(formattedBook);
        }
        else
        {
          setBook(null);
        }
        setLoading(false);
      }
      catch (err)
      {
        console.log(err)
      }
    }
    getBookDetails();
  }, [id])

  return (
    <div className = "bg-fuchsia-50">
      <BookDetailsHeader headerText= 'About This Book'/>
      <div className = "container m-auto">
      <div className = "mt-5 ml-5">
        <Link to = '/'>
          <p className = "text-fuchsia-800 cursor-pointer font-bold paragraph-font">Back to Search Results</p>
          <IoArrowBackCircleOutline fontSize={48} className = "mt-1 text-fuchsia-800 cursor-pointer hover:text-sky-500" onClick = {() => navigate("/book")} />
        </Link>
      </div>
      <div className = "mt-5 mb-10 text-center">
          <span className = "text-3xl paragraph-font ">{book?.title}</span>
          <hr className="h-px my-8 bg-fuchsia-800 border-0 w-1/4 m-auto"></hr>
      </div>

        <div className ="flex justify-center items-center pt-5 mb-10">
          <img src = {book?.cover_img} alt = "cover image"/>
        </div>

      <div className = "w-4/5 m-auto">
        <div className = "mt-5">
          <span className = "text-lg display-font font-bold">Description: </span>
          <span className = "paragraph-font font-normal">{book?.description}</span>
        </div>
        <div className = "mt-10">
          <span className = "text-lg display-font font-bold">Subject Times: </span>
          <span className = "paragraph-font">{book?.subject_times}</span>
        </div>
        <div className = "mt-5">
          <span className = "text-lg display-font font-bold">Subject Places: </span>
          <span className = "paragraph-font">{book?.subject_places}</span>
        </div>
        <div className = "mt-5 mb-10">
          <span className = "text-lg display-font font-bold">Subjects: </span>
          <span className = "paragraph-font">{book?.subjects}</span>
        </div>
      </div>


      </div>

    <Footer/>
    </div>

    
  )
}

export default BookDetails