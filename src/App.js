
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ReadingList from './Pages/ReadingList';
import Booklist from './Components/Booklist/Booklist';
import BookDetails from './Components/BookDetails/BookDetails';
import { BookContextProvider } from './Contexts/Context';


function App() {
  return (
    <div className="App bg-fuchsia-50">
    <div className = "app-wrap">
      <BookContextProvider>
      <BrowserRouter>
        <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/reading-list" element = {<ReadingList/>}/>
            <Route path = "/book" element = {<Booklist/>}/>
            <Route path = "/book/:id" element = {<BookDetails/>}/>
        </Routes>
      </BrowserRouter>
      </BookContextProvider>
      </div>
    </div>
  );
}

export default App;
