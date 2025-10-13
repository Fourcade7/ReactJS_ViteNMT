


import { Navbar,Nav,Container,Button, Row, Col,Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import mobile from "../assets/mobile.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import telegram from "../assets/telegram.png";
import placeholder from "../assets/placeholder.png";
import nestblack from "../assets/nstlogo.png";
import { useTranslation } from "react-i18next";



function FooterContent(){
  const { t } = useTranslation();
  return(
    <div>
      <br />
      <br />
      <br />
      <Row className="rounded-4 ssh p-5 mb-5" style={{backgroundColor:"#e6ecfcd3"}}>
        <Col>
              <p className="fw-bold">{t("contactus")}</p>
              <div className="d-flex align-items-center mt-3">
                <img src={mobile} width={18} height={18} alt="" />
                <small className="ms-2">+998 78 333 04 17</small>
              </div>
              <div className="d-flex align-items-center mt-2">
                <img src={instagram} width={18} height={18} alt="" />
                <small className="ms-2">@instagram.comnestmedtech</small>
              </div>
              <div className="d-flex align-items-center mt-2">
                <img src={youtube} width={18} height={18} alt="" />
                <small className="ms-2">@nestmedtech</small>
              </div>
              <div className="d-flex align-items-center mt-2">
                <img src={telegram} width={18} height={18} alt="" />
                <small className="ms-2">@nestmedtech</small>
              </div>
              
        </Col>
        


            <Col>
              <p className="fw-bold">{t("navigation")}</p>

              <div className="d-flex align-items-center mt-3">
                <Link to="/" className="small link-dark text-decoration-none">{t("home")}</Link>
              </div>
              <div className="d-flex align-items-center mt-2">
                <Link to="/category" className="small link-dark text-decoration-none">{t("category")}</Link>
              </div>
              <div className="d-flex align-items-center mt-2">
                <Link to="/product" className="small link-dark text-decoration-none">{t("product")}</Link>
              </div>
              <div className="d-flex align-items-center mt-2">
                <Link to="/about" className="small link-dark text-decoration-none">{t("aboutus")}</Link>
              </div>
              {/* <div className="d-flex align-items-center mt-2">
                <Link to="/contact" className="small link-dark text-decoration-none">{t("contactus")}</Link>
              </div> */}
            </Col>

           

            <Col>
            <p className="fw-bold">{t("address")}</p>
            <div className="d-flex flex-column align-items-center mt-2">
                <small className="">{t("addressfull")}</small>
                <img className="me-auto mt-2" src={placeholder} width={18} height={18} alt="" />

              </div>
            </Col>

        <Col className="d-flex flex-column align-items-center justify-content-center">

          <img className="object-fit-contain" src={nestblack}  width={100} height={100} alt="" />
          <small className="text-center">{t("goalfull")}</small>
          
        </Col>
      </Row>

    </div>
  )
}



export default FooterContent;