import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookDetail from "./components/Book/BookDetail";
import Books from "./components/Book/Books";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  
return(
  <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element = {<Home />} exact />
      <Route path="/add" element = {<AddBook />} exact />
      <Route path="/books" element = {<Books />} exact />
      <Route path="/books/:id" element = {<BookDetail />} exact />
    </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
