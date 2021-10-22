import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Admin</h1>
    <p>Reat Reduxresponsive app</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn hear
    </Link>
  </div>
);

export default HomePage;
