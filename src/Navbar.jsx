import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import { GoogleLogin } from 'react-google-login';
import LogoPerusahaan from "./assets/contact-boss.png"; // Pastikan path ke logo perusahaan benar
import './App.css';

function NavigationBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const responseGoogle = (response) => {
    console.log(response);
    // 
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/" className="navbar-brand text-light py-2">
            <i className="bi bi-gem"></i> Rolex
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#" className="nav-link">About</Nav.Link>
              <Nav.Link href="#" className="nav-link">Contact</Nav.Link>
              <NavDropdown title="Social Media" id="collapsible-nav-dropdown" className="nav-dropdown">
                <NavDropdown.Item href="#" className="nav-dropdown-item text-dark d-flex justify-content-evenly"><i className="bi bi-instagram"></i> Instagram</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" className="nav-dropdown-item text-dark d-flex justify-content-evenly"><i className="bi bi-youtube"></i> YouTube</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#" className="nav-dropdown-item text-dark d-flex justify-content-evenly"><i className="bi bi-whatsapp"></i> Whatsapp</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#" className="nav-link link-icon" onClick={handleShow}><i className="bi bi-person"></i> Login</Nav.Link>
              <Nav.Link href="#" className="nav-link link-icon">
                <i className="bi bi-person-add"></i> Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title>
            <div className="mt-2">
              Please Login <i className="bi bi-emoji-smile"></i>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <div className="d-flex flex-column align-items-center mb-4">
            <img 
              src={LogoPerusahaan} 
              alt="Company Logo" 
              className="company-logo mb-2"
              style={{ width: '80px', height: '80px' }} 
            />
            <span className="company-name">Rolex</span>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-2">
              Submit
            </Button>
            <div className="d-flex justify-content-between mb-3">
              <a href="#" onClick={handleClose}>Forgot Password?</a>
              <a href="#" onClick={handleClose}>Sign Up</a>
            </div>
            <GoogleLogin
              clientId="184353935641-hpm68qknnvr5t7pqolbn7mg93eqttvvb.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              className="w-100 google-login-button"
            />
          </Form>
          <div className="footer mt-4 pt-2 border-top">
            <p className="text-center small mb-0">&copy; 2024 Rolex. All rights reserved.</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavigationBar;
