
import { useState, useEffect } from 'react';
import { useNavigate,useLocation } from "react-router-dom";

import { Row,Col } from 'react-bootstrap';
import { MyNavbarScreen, TopLine } from '../myNavbar/MyNavbar';
import FooterContent from '../footer/MyFooter';
import { getAll ,getBy} from "./productApi";
import { useTranslation } from 'react-i18next';
import top1 from "../assets/top1.JPG"



//IMAGES
function TopContent(){

  const { t} = useTranslation();
  
    return(
        <div>
            <Row className="g-0" style={{backgroundColor:"#2A4393"}}>
                <Col  className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12  p-5 text-white" style={{backgroundColor:"#F7A709"}}>
                    <h4 className=" p-0 m-0" style={{fontFamily:"montserratThin"}}>{t("topdesc")}</h4>
                </Col>
                <Col className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12">
                    <img className="object-fit-cover w-100" height={250} src={top1} alt="" />
                </Col>
            </Row>
        </div>
    )

}

function TopContentOld(){
  const { t} = useTranslation();

    return(
        <div>
            <Row className="g-0" style={{height:"400px"}}>
                <Col  className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12  p-5 text-black h-100" style={{backgroundColor:"#F7A709"}}>
                    <h4 className=" p-0 m-0" style={{fontFamily:"montserratLight"}}>{t("topdesc")}</h4>
                </Col>
                <Col className="col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12  h-100">
                    <img className="object-fit-cover w-100 h-100" src={top1} alt="" />
                </Col>
            </Row>
        </div>
    )

}

function ProductContent(){
   const { i18n } = useTranslation();
    const navigate=useNavigate();

  const location=useLocation();
  const data=location.state;
  
  console.log(data);

  const [array, setArray] = useState([]);

   useEffect(() => {
    async function load() {

      if (data?.id) {
      // agar data bor va id aniqlangan bo‘lsa
      console.log(data.name);
      console.log(data.id);
      await getBy(data.id).then(res => {
        setArray(res.products);
        console.log("ID", res);
      });
    } else {
      await getAll().then(res => {
        setArray(res);
        console.log("get ALL", res);
      });
    }
      
    } 
    load();
    },[]);

  return(
    <div>
      <div className="container mt-5">
      <Row className='row-cols-auto justify-content-center g-3'>
        {array.length>0 && 
            array.map((item,index)=>(
                <Col key={index}
                  onClick={()=>{
                  navigate("/detail",{state:item});
              }}
                >
                    <div className="position-relative d-inline-block">
                
                    <img className="rounded-3 object-fit-cover" src={item.imgUrl} height={220} width={350} alt=""></img>
                    <div className="position-absolute top-100 start-50 translate-middle w-100">
                        <div className="rounded-2 mx-3 px-3 py-2 text-center" style={{backgroundColor:"#F7A709"}}><h4 className="m-0 fw-bold" style={{fontFamily:"montserratmedium"}}>{
                          i18n.language==="en" ? item.nameen:
                          i18n.language==="uz" ? item.nameuz:
                          item.name 
                          }</h4></div>
                    </div>
                </div>
                </Col>
            ))
        }
        
      </Row>
    </div>

    </div>
  )
}

function BigTextContent(){
  const { t} = useTranslation();
  return(
    <div className="d-flex my-5">
      <br />
      <br />
      <br />
      <br />
      
      <Col className=" mx-auto text-center d-flex flex-column">
          <h1><strong  style={{ fontFamily: "montserratExtraBold" }}>{t("ourproducts")}</strong></h1>
          <small>{t("ourproductsshow")}</small>
      </Col>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}




function ProductScreen(){


  return(
    <div>
      <TopLine></TopLine>
      <div className='container'>
        <MyNavbarScreen></MyNavbarScreen>
      </div>
      <TopContent></TopContent>
      <br />
      <br />
      <br />
      <BigTextContent></BigTextContent>

      <ProductContent></ProductContent>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FooterContent></FooterContent>

    </div>
  )
}


export  {ProductScreen};