import { Button, Col, Row } from "react-bootstrap";
import { Nav,NavDropdown } from "react-bootstrap";
import FooterContent from "../footer/MyFooter";
import  { TopLine,MyNavbarScreen } from "../myNavbar/MyNavbar";
import {CategoryContent} from "../category/Category"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from "swiper/modules"; 


import { useTranslation } from "react-i18next";
import { useEffect ,useRef} from "react";


import 'swiper/css';
import 'swiper/css/navigation';





//images


import time from '../assets/time.png'
import ecology from '../assets/ecology.png'
import money from '../assets/money.png'
import work from '../assets/work.png'
import adinamengermany from '../assets/adinamengermany.png'
import dispro from '../assets/dispro.jpg'
import grandpharm from '../assets/grandpharm.png'
import medicare from '../assets/medicare.png'
import medcaretr from '../assets/medcaretr.png'

import top2 from "../assets/bannerhome.jpg"
//import newlogo from "../assets/newlogo.png"

import news1 from '../assets/news1.jpg'
import news2 from '../assets/news2.jpg'
import news3 from '../assets/news3.png'



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
            <Row className="g-0" style={{backgroundColor:"#048bfe"}}>
                <Col  className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12  p-5 text-white" style={{backgroundColor:"#048bfe"}}>
                    <h4 className=" p-0 m-0" style={{fontFamily:"futuramedium"}}>{t("topdesc")}</h4>
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
          <h1><strong  style={{ fontFamily: "argentum",color:"#0f63aa" }}>NEST MED TECH</strong></h1>
          
      </Col>
      <Col className="col-12 col-lg-6 mx-auto text-center d-flex flex-column">
          <h1><strong  style={{ fontFamily: "argentum",color:"#0f63aa" }}>{t("goal")}</strong></h1>
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
    <div className="d-flex">
      <br />
      <br />
      <br />
      <br />
      
      <Col className="container mx-auto text-center d-flex flex-column">
          <h1><strong  style={{ fontFamily: "argentum",color:"#0f63aa" }}>{t("news")}</strong></h1>
          <small>{t("newsdesc")}</small>
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
    <div className="d-flex align-items-center py-5 my-5" style={{backgroundColor:"#048bfe"}}>
      <br />
        <div className="container text-white">
            <Row className="my-5 justify-content-center">
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 me-2" style={{backgroundColor:"#0c72ccff"}}>
            <img className="object-fit-contain" height={100} src={time} alt="" />
            <p className="mt-3 fw-bold text-center">{t("economy")}</p>
            <small className="text-center">{t("economydesc")}</small>
          </Col>
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 ms-2 me-2" style={{backgroundColor:"#0c72ccff"}}>
            <img className="object-fit-contain" height={100} src={ecology} alt="" />
            <p className="mt-3 fw-bold">{t("ecology")}</p>
            <small className="text-center">{t("ecologydesc")}</small>
          </Col>
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 ms-2 me-2" style={{backgroundColor:"#0c72ccff"}}>
            <img className="object-fit-contain" height={100} src={money} alt="" />
            <p className="mt-3 fw-bold">{t("comfort")}</p>
            <small className="text-center">{t("comfortdesc")}</small>
          </Col>
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 ms-2" style={{backgroundColor:"#0c72ccff"}}>
            <img className="object-fit-contain" height={100} src={work} alt="" />
            <p className="mt-3 fw-bold">{t("resolution")}</p>
            <small className="text-center">{t("resolutiondesc")}</small>
          </Col>
        </Row>
        </div>
    </div>
  )
}



function BitrixForm() {
  useEffect(() => {
    const oldScript = document.querySelector(
      'script[src*="loader_3.js"]'
    );
    if (oldScript) oldScript.remove(); // qayta yuklanmasligi uchun

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://cdn-ru.bitrix24.kz/b31561490/crm/form/loader_3.js?" +
      Math.floor(Date.now() / 180000);

    script.setAttribute("data-b24-form", "inline/3/dr3w0v");
    script.setAttribute("data-skip-moving", "true");
    script.setAttribute("data-b24-lang", "ru");

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <br />
      <div id="b24-form"></div>
      <br />
    </>
  );
}


export  function BitrixForm2() {
  const containerRef = useRef(null);

  useEffect(() => {
    // ✅ Bitrix form saqlagan barcha qiymatlarni tozalash
  localStorage.removeItem("b24-form-3");
  sessionStorage.removeItem("b24-form-3");
    if (!containerRef.current) return;

    // eski loader bo‘lsa o‘chiramiz
    const old = document.querySelector(
      'script[src*="loader_3.js"]'
    );
    if (old) old.remove();

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://cdn-ru.bitrix24.kz/b31561490/crm/form/loader_3.js?" +
      Math.floor(Date.now() / 180000);

    // ⚠️ ENG MUHIM QISM — FORMNI SHU DIV ICHIGA MAJBUR QILAMIZ
    script.setAttribute("data-b24-form", "inline/3/dr3w0v");
    script.setAttribute("data-skip-moving", "true");
    script.setAttribute("data-b24-lang", "ru");

    containerRef.current.appendChild(script); // ✅ endi body ga emas

  }, []);

  return <div ref={containerRef}></div>;
}


function NewsCompanyInfo(){
  const { t } = useTranslation();
  return(
    <div className="d-flex align-items-center">
      <br />
        <div className="container text-whitex">
            <Row className="my-5 justify-content-center">
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 me-2">
            <img className="object-fit-cover" width={200} height={200} src={news1} alt="" />
            <p className="mt-3 fw-bold text-center">{t("news1")}</p>
            <small className="text-center"><a className="link-dark" target="_blank" href="https://t.me/nestmedtech/203">{t("news1desc")}</a></small>
          </Col>
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 ms-2 me-2">
            <img className="object-fit-cover" width={200} height={200} src={news2} alt="" />
            <p className="mt-3 fw-bold">{t("news2")}</p>
           <small className="text-center"><a className="link-dark" target="_blank" href="https://t.me/nestmedtech/208">{t("news2desc")}</a></small>
          </Col>
          <Col className="d-flex flex-column align-items-center rounded-4 p-4 ms-2 me-2">
            <img className="object-fit-cover" width={200} height={200} src={news3} alt="" />
            <p className="mt-3 fw-bold">{t("news3")}</p>
           <small className="text-center"><a className="link-dark" target="_blank" href="https://t.me/nestmedtech/209">{t("news3desc")}</a></small>
          </Col>
          
        </Row>
        </div>
    </div>
  )
}

function HomeScreen(){

    return(
        <div>
          <div className="sticky-top bg-white">
            <TopLine></TopLine>
            <div className="container-lg">
                <MyNavbarScreen></MyNavbarScreen>
            </div>
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
            <NewsCompanyInfo></NewsCompanyInfo>
            {/* <SliderScreen></SliderScreen> */}
            <br />
            
            <br />
            <Row className="justify-content-center">
              <Col className="col-12 col-md-4 col-lg-4">
            <BitrixForm2></BitrixForm2>
            </Col>
            </Row>
            
            
            
            <br />
            <FooterContent></FooterContent>

            {/* <AppTranslator></AppTranslator> */}
            
        </div>
    )

}


export default HomeScreen;