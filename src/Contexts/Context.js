import { useState, useContext, useEffect, createContext, useCallback } from "react";

const API_URL = `https://openlibrary.org/search.json?title=`
const BookContext = createContext()

const BookContextProvider = ({children}) => 
{
    const [searchTerm, setSearchTerm] = useState("harry potter");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resultTitle, setResultTitle] = useState("");
    const [readingList, setReadingList] = useState([]);

    const addToReadingList = (book) => {
        const oldList = [...readingList];
        const newList = oldList.concat(book);
        setReadingList(newList);
        console.log(readingList)
    }

    const removeFromReadingList = (id) => {
        const oldList = [...readingList];
        const newList = oldList.filter((book) => book.id !== id);
        setReadingList(newList);
        console.log('removed!')
        
    }


    const fetchData = async() => 
    {
        setLoading(true);
        try
        {
            
            const response = await fetch(`${API_URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;
                if (docs)
                {
                    const formattedBooks = docs.slice(0,20).map((singleBook) => 
                    {
                        const {key, author_name, cover_i, edition_count, subject, first_publish_year, title} = singleBook;
                        return {
                            id:key,
                            author: author_name,
                            cover_id: cover_i,
                            edition_count: edition_count,
                            first_publish: first_publish_year,
                            subject: subject,
                            title:title
                        }
                    })
                    setBooks(formattedBooks)
                    console.log(formattedBooks);
                    if(formattedBooks.length >= 1)
                    {
                        setResultTitle("Your Search Results");
  
                    }
                    else
                    {
                        setResultTitle("No Results Found");
                    }
                    setLoading(false)
                }
                else
                {
                    setBooks([]);
                    setResultTitle("No Results Found");

                }

        }
        catch(err)
        {
            console.log(err)
        }

    }


return (
    <BookContext.Provider value = {{loading, books, setSearchTerm, searchTerm, fetchData, resultTitle, setResultTitle, readingList, addToReadingList, removeFromReadingList}}>
        {children}
    </BookContext.Provider>
)}



export {BookContext, BookContextProvider}
