import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../Miscellaneous/NavigationBar.css";
import menuIcon from "../../assets/NavgigationBarImages/Menu.png";
import searchIcon from "../../assets/NavgigationBarImages/search.png";
import closeIcon from "../../assets/NavgigationBarImages/cr1.png";
import fb from "../../assets/NavgigationBarImages/fb1.png";
import insta from "../../assets/NavgigationBarImages/in1.png";
import logoblack from "../../assets/NavgigationBarImages/PergolaroomLogoBlack.png";
import logowhite from "../../assets/NavgigationBarImages/PergolaroomLogoWhite.png";

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="white">
        <Container fluid className="py-2">
          <Navbar.Brand href="#home" className="font-face-rb">
            <img src={logoblack} className="img-fluid" />
          </Navbar.Brand>
          <div className="icons">
            <img src={searchIcon} alt="search" />
            <img
              onClick={handleShow}
              src={menuIcon}
              alt="menu"
              className="ms-3"
            />
          </div>
        </Container>
      </Navbar>

      <Offcanvas show={show} placement="top">
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img src={logowhite} className="img-fluid" />
          </Offcanvas.Title>
          <div className="icons">
            <span className="font-face-rr">Close</span>
            <img
              src={closeIcon}
              alt="close"
              className="ms-2"
              onClick={handleClose}
            />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div id="Floating-Menu" className="container">
            <div className="row">
              <div className="first col-lg-2 font-face-rb ">
                Call Us <br />
                <small className="font-face-rr">+971585799666</small>
              </div>
              <div className="second col-lg-2 pb-2 font-face-rb ">
                Email Us <br />
                <small className="font-face-rr">info@pergolasroom.ae</small>
              </div>
              <div className="third col-lg-3 pb-2 font-face-rb ">
                Visit Us
                <br />
                <small className="font-face-rr ">
                  Dubai, United Arab Emirates
                </small>
                <br />
                <small className="font-face-rr ">
                  Sharjah, United Arab Emirates
                </small>
              </div>
              <div id="nav-List" className="col-lg-5">
                <ul className="items font-face-rb">Home</ul>
                <ul className="items font-face-rb">About</ul>
                <ul className="items font-face-rb">Pergolas Rooms</ul>
                <ul className="items font-face-rb">Pergolas</ul>
                <ul className="items font-face-rb">BBQ Areas</ul>
                <ul className="items font-face-rb">Villa Extension</ul>
                <ul className="items font-face-rb">Contact</ul>
              </div>
            </div>
            <hr className="Horizontal-line mt-5" />

            <span className="font-face-rr">Follow Us</span>
            <div className="floating-icons py-2">
              <img className="pb-2 ms-2" src={fb} alt="fb" />
              <img className="pb-2 ms-2" src={insta} alt="insta" />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavigationBar;
