import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BookDetail = () => {
  const [inputs, setInputs] = useState({});
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState("");

  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        res.data.then((data) => setInputs(data.book));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const submitHandle = (e) => {
    e.preventDefault();
  };

  console.log(inputs);

  return (
    <div>
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
    </div>
  );
};

export default BookDetail;
