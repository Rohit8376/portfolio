import React, { useState } from "react";

const Contact = () => {




  const [data,setData] = useState({
    name:"",
    email:'',
    phone:"",
    msg:""
  })

  const InputEvent = (event) =>{
    const {name,value}= event.target

    setData((preval)=>{
      return {
        ...preval,
        [name]:value
      }
    })

  }
  const formSubmit = (e) => {
    e.preventDefault()
    alert(data.name)
  };


  return (
    <>
      <div className="container contact_div my-5" style={{ height: "75vh" }}>
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="examplecontroll1" class="form-lebel">
                  FullName
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={data.name}
                  onChange={InputEvent}
                  id="examplecontroll1"
                  placeholder="enter your Name"
                />
              </div>
              <div className="mb-3">
                <label for="examplecontroll2" class="form-lebel">
                  PhoneNumber
                </label>
                <input
                  name="phone"
                  type="number"
                  className="form-control"
                  id="examplecontroll2"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="enter your phone Number"
                />
              </div>
              <div className="mb-3">
                <label for="examplecontroll3" class="form-lebel">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="examplecontroll3"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Example@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label class="form-lebel">Message</label>
                <textarea
                  name="msg"
                  className="form-control"
                  placeholder="Example@gmail.com"
                  value={data.msg}
                  onChange={InputEvent}
                  row="5"
                ></textarea>
              </div>

              <div class="col-12">
                <input
                  type="submit"
                  className=" btn btn-outline-primary"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <section
        id="header2"
        className="d-flex align-items-center justify-content-center text-center"
      >
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <h1>Rohit.kp.pandey@gmail.com</h1>
              <div className="row">
                <div className="col-8 mx-auto my-10">
                  <div className="row">
                    <div className="col-md-3 col-10 mx-auto">
                      <a
                        href="https://github.com/Rohit8376"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          margin: "10px",
                          display: "inline-block",
                          padding: "9px 12px",
                          borderRadius: "3px",
                          border: "1px solid rgb(224, 224, 224)",
                        }}
                        target="_blank"
                      >
                        <i class="fab fa-github"></i>
                        <span class="contact_link_name_span">Github</span>
                      </a>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                      <a
                        href="https://www.linkedin.com/in/rohit-pandey-a017a81b2/"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          margin: "10px",
                          display: "inline-block",
                          padding: "9px 12px",
                          borderRadius: "3px",
                          border: "1px solid rgb(224, 224, 224)",
                        }}
                        target="_blank"
                      >
                        <i class="fab fa-linkedin"></i>
                        <span class="contact_link_name_span">LinkedIn</span>
                      </a>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                      <a
                        href="https://www.hackerrank.com/1080pandey"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          margin: "10px",
                          display: "inline-block",
                          padding: "9px 12px",
                          borderRadius: "3px",
                          border: "1px solid rgb(224, 224, 224)",
                        }}
                        target="_blank"
                      >
                        <i class="fab fa-hackerrank"></i>
                        <span> Hackerrank</span>
                      </a>
                    </div>
                    <div className="col-md-3 col-10 mx-auto">
                      <a
                        href="#"
                        style={{
                          color: "white",
                          textDecoration: "none",
                          margin: "10px",
                          display: "inline-block",
                          padding: "9px 12px",
                          borderRadius: "3px",
                          border: "1px solid rgb(224, 224, 224)",
                        }}
                        target="_blank"
                      >
                        <i class="far fa-id-card"></i>
                        <span> Résumé</span>
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
};

export default Contact;
