


import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MyNavbarScreen, TopLine } from "../myNavbar/MyNavbar";
import { Row,Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/css/navigation';

//IMAGES

//import beforeop from "../assets/beforeop.jpg"
import mobile from "../assets/mobile.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import telegram from "../assets/telegram.png";
import placeholder from "../assets/placeholder.png";
import email from "../assets/email.png";

//
import adinamengermany from '../assets/adinamengermany.png'
import dispro from '../assets/dispro.jpg'
import grandpharm from '../assets/grandpharm.png'
import medicare from '../assets/medicare.png'
import medcaretr from '../assets/medcaretr.png'
import FooterContent from "../footer/MyFooter";
import top3 from "../assets/top3.JPG"



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
            <Row className="g-0" style={{backgroundColor:"#F7A709"}}>
                <Col  className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12  p-5 text-white" style={{backgroundColor:"#F7A709"}}>
                    <h4 className=" p-0 m-0" style={{fontFamily:"montserratThin"}}>{t("topdesc")}</h4>
                </Col>
                <Col className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12">
                    <img className="object-fit-cover w-100" height={250} src={top3} alt="" />
                </Col>
            </Row>
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

function AboutScreen(){
  const { t } = useTranslation();
    return(
        <div>
            <TopLine></TopLine>
            <div className='container'>
              <MyNavbarScreen></MyNavbarScreen>
            </div>
            <TopContent></TopContent>
            <div className="container my-5">
                <Row>
                <Col>
                              <p className="fw-bold">{t("contactus")}</p>
                              <div className="d-flex align-items-center mt-3">
                                <img src={email} width={18} height={18} alt="" />
                                <small className="ms-2">nestmedtech@gmail.com</small>
                              </div>
                              <div className="d-flex align-items-center mt-3">
                                <img src={mobile} width={18} height={18} alt="" />
                                <small className="ms-2">+998 78 333 04 17</small>
                              </div>
                              <div className="d-flex align-items-center mt-2">
                                <img src={instagram} width={18} height={18} alt="" />
                                <small className="ms-2">@nest_med_tech</small>
                              </div>
                              <div className="d-flex align-items-center mt-2">
                                <img src={youtube} width={18} height={18} alt="" />
                                <small className="ms-2">@nestmedtech</small>
                              </div>
                              <div className="d-flex align-items-center mt-2">
                                <img src={telegram} width={18} height={18} alt="" />
                                <small className="ms-2">@nestmedtech</small>
                              </div>
                              <div className="d-flex flex-column align-items-center mt-2">
                                  <small className="">{t("addressfull")}</small>
                                  <img className="me-auto mt-2" src={placeholder} width={20} height={20} alt="" />
                               </div>
                              
                        </Col>
                
                <Col>
                <MapScreen></MapScreen>
                </Col>
            </Row>
            </div>
            <br />
            <BigTextContentSlide></BigTextContentSlide>
            <SliderScreen></SliderScreen>
            <br />
            <FooterContent></FooterContent>
            

        </div>
    )
}



function MapScreen() {
  const position = [41.20306, 69.24515]; // Beruniy koordinatasi (misol)

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/">OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
         
          <Tooltip permanent direction="top" offset={[0, -20]}>
            <b>NESTMEDTECH</b>
            <br />
            <small>
              Toshkent, Yangihayot tumani, Daryo bo‘yi ko‘chasi, 4-tor ko‘cha.
            </small>
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
}





export {AboutScreen}