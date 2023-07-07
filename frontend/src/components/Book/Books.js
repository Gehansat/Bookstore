import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "./Books.css";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        console.log(res);
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="container">
      <h2>Book List</h2>
      <div style={{ display: "flex" }} id="cards">
        {books.map((book) => (
          <div
            className="card"
            style={{ width: "18rem", margin: "10px" }}
            key={book._id}
          >
            <div className="card-body">
              <h5>Name : </h5>
              <p className="card-title">{book.name}</p>
              <h5>Author : </h5>
              <p className="card-text">{book.author}</p>
              <h5>Description : </h5>
              <p className="card-text">{book.description}</p>
              <h5>Price : </h5>
              <p className="card-text">{book.price}</p>
              {/* <Button class='btn btn-primary'>Update</Button> */}

              <Link to={`/books/${book._id}`} class="btn btn-primary">
                Update
              </Link>

              <div className="tbtn">
                <button class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
