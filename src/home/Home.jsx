import { Button, Col, Row } from "react-bootstrap";
import { Nav,NavDropdown } from "react-bootstrap";
import FooterContent from "../footer/MyFooter";
import  { TopLine,MyNavbarScreen } from "../myNavbar/MyNavbar";
import {CategoryContent} from "../category/Category"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from "swiper/modules"; 


import { useTranslation } from "react-i18next";


import 'swiper/css';
import 'swiper/css/navigation';





//images

import beforeop from "../assets/beforeop.jpg"
import time from '../assets/time.png'
import ecology from '../assets/ecology.png'
import money from '../assets/money.png'
import work from '../assets/work.png'
import adinamengermany from '../assets/adinamengermany.png'
import dispro from '../assets/dispro.jpg'
import grandpharm from '../assets/grandpharm.png'
import medicare from '../assets/medicare.png'
import medcaretr from '../assets/medcaretr.png'
import top1 from "../assets/top1.JPG"
import top2 from "../assets/top2.JPG"



function AppTranslator() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Tilni almashtirish
  };

  return (
    <div>
      <h2>{t("welcome")}</h2>
      <button>{t("login")}</button>

      <hr />

      <button className="btn btn-primary" onClick={() => changeLanguage("uz")}>🇺🇿 O‘zbekcha</button>
      <button onClick={() => changeLanguage("ru")}>🇷🇺 Русский</button>
      <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
    </div>
  );
}



function SliderScreen() {
 
  return (
    <div className="container">
    <Swiper spaceBetween={13} slidesPerView={4} loop={true} // cheksiz aylanish
        autoplay={{
          delay: 2000, // 2 soniyada slayd almashadi
          disableOnInteraction: false, // foydalanuvchi sursa ham davom etadi
        }}
        navigation={false} // navigation qo'shildi
        modules={[Autoplay,Navigation]} // modulni ulash
       >
      
     
      <SwiperSlide>
        <div className="d-flex align-items-center">
          <img height={150} src={dispro} alt="1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="d-flex align-items-center">
          <img height={150} src={grandpharm} alt="2" />
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className="d-flex align-items-center">
          <img className="" height={150} src={medcaretr} alt="3" />
        </div>
      </SwiperSlide>
      

       <SwiperSlide>
        <div className="d-flex align-items-center">
          <img height={150} src={adinamengermany} alt="4" />
        </div>
      </SwiperSlide>
       <SwiperSlide>
        <div className="d-flex align-items-center" >
          <img className="object-fit-contain" height={150} src={medicare} alt="1" />
        </div>
      </SwiperSlide>
      
      
     
    </Swiper>
     
    </div>
  );
}



function TopContent(){

  const { t} = useTranslation();
  
    return(
        <div>
            <Row className="g-0" style={{backgroundColor:"#2A4393"}}>
                <Col  className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12  p-5 text-white" style={{backgroundColor:"#2A4393"}}>
                    <h4 className=" p-0 m-0" style={{fontFamily:"montserratThin"}}>{t("topdesc")}</h4>
                </Col>
                <Col className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12">
                    <img className="object-fit-cover w-100" height={250} src={top2} alt="" />
                </Col>
            </Row>
        </div>
    )

}



function BigTextContent(){
  const { t } = useTranslation();
  return(
    <div className="d-flex flex-column mt-5">
      <br />
      <br />
      <Col className="col-12 col-lg-12 col-md-5 col-sm-12 mx-auto text-center d-flex flex-column">
          <h1><strong  style={{ fontFamily: "argentum" }}>NESTMEDTECH</strong></h1>
          
      </Col>
      <Col className="col-12 col-lg-6 mx-auto text-center d-flex flex-column">
          <h1><strong  style={{ fontFamily: "argentum" }}>{t("goal")}</strong></h1>
          <small>{t("topdesc")}</small>
      </Col>
      <br />
      <br />
    </div>
  )
}


function BigTextContentSlide(){
   const { t } = useTranslation();
  return(
    <div className="d-flex my-5">
      <br />
      <br />
      <br />
      <br />
      
      <Col className="container mx-auto text-center d-flex flex-column">
          <h1><strong  style={{ fontFamily: "argentum" }}>{t("partners")}</strong></h1>
          <small>{t("partnersdesc")}</small>
      </Col>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}




function CompanyInfo(){
  const { t } = useTranslation();
  return(
    <div className="d-flex align-items-center py-5 my-5" style={{backgroundColor:"#2A4393"}}>
      <br />
        <div className="container text-white">
            <Row className="my-5 justify-content-center">
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 me-2" style={{backgroundColor:"#2250A6"}}>
            <img className="object-fit-contain" height={100} src={time} alt="" />
            <p className="mt-3 fw-bold text-center">{t("economy")}</p>
            <small className="text-center">{t("economydesc")}</small>
          </Col>
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 ms-2 me-2" style={{backgroundColor:"#2250A6"}}>
            <img className="object-fit-contain" height={100} src={ecology} alt="" />
            <p className="mt-3 fw-bold">{t("ecology")}</p>
            <small className="text-center">{t("ecologydesc")}</small>
          </Col>
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 ms-2 me-2" style={{backgroundColor:"#2250A6"}}>
            <img className="object-fit-contain" height={100} src={money} alt="" />
            <p className="mt-3 fw-bold">{t("comfort")}</p>
            <small className="text-center">{t("comfortdesc")}</small>
          </Col>
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 ms-2" style={{backgroundColor:"#2250A6"}}>
            <img className="object-fit-contain" height={100} src={work} alt="" />
            <p className="mt-3 fw-bold">{t("resolution")}</p>
            <small className="text-center">{t("resolutiondesc")}</small>
          </Col>
        </Row>
        </div>
    </div>
  )
}






function HomeScreen(){

    return(
        <div>
            <TopLine></TopLine>
            <div className="container-lg">
                <MyNavbarScreen></MyNavbarScreen>
            </div>
            <TopContent></TopContent>
            <br />
            <br />
            <BigTextContent></BigTextContent>

            <CategoryContent></CategoryContent>
            <br />
            <br />
            <br />
            <br />
            <br />
                        <CompanyInfo></CompanyInfo>

            <br />
            <BigTextContentSlide></BigTextContentSlide>
            <SliderScreen></SliderScreen>
            <br />
            
            <br />
            <FooterContent></FooterContent>

            {/* <AppTranslator></AppTranslator> */}
            
        </div>
    )

}


export default HomeScreen;