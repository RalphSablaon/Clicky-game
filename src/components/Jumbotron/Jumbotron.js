import React from 'react';
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron jumbotron-fluid">
      <div className="container text-center">
        <h1 className="display-4">React Clicky Game!</h1>
        <p className="lead">Click on one of the fighters to earn points, but don't click on the same fighter more than once!</p>
      </div>
    </div>
    );
    export default Jumbotron;