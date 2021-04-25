import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/images/download.jpg'

const Card = () => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto ">
        <div className="card" style={{ marginTop: "24px" }}>
          <img src={web} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5>Card title</h5>
            <p className="card-text">
              some quick example text to build on the card title and make up
              bulk of the card content
            </p>
            <NavLink to="" className="btn btn-primary">
              go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

