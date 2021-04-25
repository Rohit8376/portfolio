import React from 'react';
import Common from './common'
import web from "../src/images/contact-us.png";
import { NavLink } from 'react-router-dom';
const About = () =>{
  return (
    <>
      <Common
        name="welcome to about page"
        visit="/contact"
        imgsrc={web}
        btnname="Contact Now"
      />

      <section
        id="header2"
        className="d-flex align-items-center justify-content-center text-center"
      >
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1>Rohit.kp.pandey@gmail.com</h1>
              <div className="row">
                <div className="col-6 mx-auto">
                  <div className="row">
                    <div className="col-md-3 col-10 mx-auto">
                      <a
                        href="#"
                        style={{
                          color: "rgb(73,73,73)",
                          textDecoration: "none",
                          margin: "10px",
                          display: "inline-block",
                          padding: "9px 12px",
                          borderRadius: "3px",
                          border: "1px solid rgb(224, 224, 224)",
                        }}
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                      <a
                        href="#"
                        style={{
                          color: "rgb(73,73,73)",
                          textDecoration: "none",
                          margin: "10px",
                          display: "inline-block",
                          padding: "9px 12px",
                          borderRadius: "3px",
                          border: "1px solid rgb(224, 224, 224)",
                        }}
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                      <a
                        href="#"
                        style={{
                          color: "rgb(73,73,73)",
                          textDecoration: "none",
                          margin: "10px",
                          display: "inline-block",
                          padding: "9px 12px",
                          borderRadius: "3px",
                          border: "1px solid rgb(224, 224, 224)",
                        }}
                        target="_blank"
                      >
                        Hackerrank
                      </a>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                      <a
                        href="#"
                        style={{
                          color: "rgb(73,73,73)",
                          textDecoration: "none",
                          margin: "10px",
                          display: "inline-block",
                          padding: "9px 12px",
                          borderRadius: "3px",
                          border: "1px solid rgb(224, 224, 224)",
                        }}
                        target="_blank"
                      >
                        Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default About;