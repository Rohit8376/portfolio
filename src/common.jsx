import React from "react";
import Typed from "react-typed";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2> {props.name} </h2>
                  <h1>
                    <strong>Rohit Kumar Pandey</strong>
                  </h1>
                  <h2 className="my-2 ">
                    And I am a {"  "}
                    <Typed
                      className="brand-name"
                      strings={[
                        "Full Stack Developer",
                        "Quick Learner",
                        "Problem Solver",
                      ]}
                      typeSpeed={100}
                      backSpeed={20}
                      loop
                    />
                    {/* <span className="typing">
                      Full Stack developer
                    </span> */}
                  </h2>
                  {/* <h2 className="my-3">
                    we are the team of talented developer making website
                  </h2> */}
                  <div className="mt-3">
                    <a href={props.visit} className="btn-get-started">
                      {props.btnname}
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home-img"
                    style={{ height: "80vh" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
