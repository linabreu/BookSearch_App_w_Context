import React, { useContext, useEffect, useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { BookContext } from '../../Contexts/Context';
import { useNavigate } from 'react-router-dom';

function Seach() {


  const {setSearchTerm, searchTerm, fetchData}= useContext(BookContext)


  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();

  }



  return (


<form className = " w-4/5 md:w-3/4 lg:w-1/2 m-auto" onSubmit={handleSubmit}>   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
      <div className="absolute top-3/5 bottom-1/4 right-8 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
        <IoSearch fontSize = {30} className = "text-fuchsia-800 hover:text-sky-500" onClick = {handleSubmit}/>
      </div>
      <input 
        type="search" 
        className="block w-full md:w-full p-4 ps-10 text-md text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 " placeholder="Search any book" required
        onChange={(e) => setSearchTerm(e.target.value)}>
      </input>
        
    </div>
</form>
  )
}

export default Seach