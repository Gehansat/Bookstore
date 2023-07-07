import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/books", {
        name: name,
        author: author,
        description: description,
        price: price,
        available: available,
      })
      .then((res) => {
        console.log(res);

        setName("");
        setAuthor("");
        setAvailable("");
        setDescription("");
        setPrice("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={submitHandle}>
      <div class="container" style={{ marginTop: "20px" }}>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Name</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ color: "blue" }}
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Author</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Description</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Price</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Available</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
            />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-sm-9 offset-sm-3">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddBook;
