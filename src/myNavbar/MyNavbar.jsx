import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form,Button,InputGroup } from 'react-bootstrap';
import {  Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";



import { useTranslation } from "react-i18next";




//images

import search from "../assets/search.png"
import nstlogo from "../assets/nstlogo.png"


import call from "../assets/call.png"
import earth from "../assets/earth.png"

function NavDropContent(){

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Tilni almashtirish
  };
    return(
        <div className="ms-2">
           
            <NavDropdown className="text-white" title={t("lang")} id="basic-nav-dropdown">
              <NavDropdown.Item  href="#action/3.1"
              onClick={
                () => {
                  changeLanguage("uz")
                  console.log(i18n.language);
                }
                
              }
              >O'zbekcha</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"
              onClick={() =>
                 {
                  changeLanguage("ru")
                  console.log(i18n.language);
                }
                }
              >
                Русский
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"
              onClick={() => {
                changeLanguage("en")
                console.log(i18n.language);
              }}
              >English</NavDropdown.Item>
              
             
            </NavDropdown>
         

        </div>
    )
}

function TopLine(){

    return(
        <div>
            <Col className="d-flex align-items-center py-1 pe-5" style={{backgroundColor:"#2A4393"}}>
               <img className="ms-auto" src={call} width={15} height={15} alt="" />
               <small className="ms-3 text-white">+998 78 333 04 17</small>
               <img className="ms-3" src={earth} width={17} height={17} alt="" />
               <NavDropContent></NavDropContent>
            </Col>
        </div>
    )

}

function MyNavbarScreen() {
  const { t } = useTranslation();
  return (
    <div className=''>
      <Navbar collapseOnSelect expand="lg" className="bg-body-light">
      <Container>
        <Navbar.Brand className='d-flex align-items-center pe-3 border-end' href="#home">
          <img className='object-fit-contain me-1' src={nstlogo} width={80} height={50} alt="" />
         
            <h6 className='fw-bold p-0 m-0'><strong >NEST MED <br />TECH</strong></h6>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
             <NavLink to="/" className="nav-link fw-bold" style={{fontFamily:"montserratmedium"}}>{t("home")}</NavLink>
              <NavLink to="/category" className="nav-link " style={{fontFamily:"montserratmedium"}}>{t("category")}</NavLink>
              <NavLink to="/product" className="nav-link " style={{fontFamily:"montserratmedium"}}>{t("product")}</NavLink>
              <NavLink to="/about" className="nav-link " style={{fontFamily:"montserratmedium"}}>{t("aboutus")}</NavLink>
            
          </Nav>
               <Form className="d-flex">
                  <InputGroup className='rounded-5'>
                    <Form.Control className=' px-3 py-2' placeholder={t("search")} aria-label="" />
                   
                    <InputGroup.Text className='bg-white'>
                     <img className="" src={search} width={17} height={17} alt="" />
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  );
}

export  {MyNavbarScreen,TopLine};