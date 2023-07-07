import React from "react";
import "react-bootstrap";
import {
  NavLink,
  BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddBook from "./AddBook";
import button from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg " style={{backgroundColor: "#f0cb67"}}>
        <div class="container-fluid">
          
          <div class="navbar-brand text-primary">
            Book Hub
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">

              <NavLink to="" className="nav-item nav-link" activeClassName="active" >
                Home
              </NavLink>
              <NavLink to="/add" className="nav-item nav-link" activeClassName="active">
                Add Books
              </NavLink>
              <NavLink to="/books" className="nav-item nav-link" activeClassName="active">
                View Books
              </NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
