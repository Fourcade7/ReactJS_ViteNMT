
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getAll} from "./categoryApi";
import { Row,Col } from 'react-bootstrap';
import { MyNavbarScreen, TopLine } from '../myNavbar/MyNavbar';
import { useTranslation } from 'react-i18next';

//IMAGES
import beforeop2 from "../assets/beforeop2.jpg"
import FooterContent from '../footer/MyFooter';
//style={{height:"400px"}}
function TopContent(){

  const { t} = useTranslation();
  
    return(
        <div>
            <Row className="g-0" style={{backgroundColor:"#2A4393"}}>
                <Col  className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12  p-5 text-white" style={{backgroundColor:"#2A4393"}}>
                    <h4 className=" p-0 m-0" style={{fontFamily:"montserratThin"}}>{t("topdesc")}</h4>
                </Col>
                <Col className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12">
                    <img className="object-fit-cover w-100" height={250} src={beforeop2} alt="" />
                </Col>
            </Row>
        </div>
    )

}

function CategoryContent(){
  const { i18n } = useTranslation();
    const navigate=useNavigate();

  const [array, setArray] = useState([]);

   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    getAll().then(res => {
      setArray(res); // API natijani yozamiz
    });
    

  }, []);

  return(
    <div>
      <div className="container ">
      <Row className='row-cols-auto justify-content-center gx-3 gy-5'>
        {array.length>0 && 
            array.map((item,index)=>(
                <Col className='' key={index}
                  onClick={()=>{
                  navigate("/product",{state:item});
              }}
                >
                    <div className="position-relative d-inline-block mt-5">
                
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
    <div className="d-flex mt-5">
      <br />
      <br />
      <br />
      <br />
      
      <Col className=" mx-auto text-center d-flex flex-column">
          <h1><strong  style={{ fontFamily: "montserratExtraBold" }}>{t("categories")}</strong></h1>
          <small>{t("categoriesshow")}</small>
      </Col>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}




function CategoryScreen(){


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

      <CategoryContent></CategoryContent>
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


export  {CategoryContent,CategoryScreen};