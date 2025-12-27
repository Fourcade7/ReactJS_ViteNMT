
import { useState, useEffect } from 'react';
import { useNavigate,useLocation } from "react-router-dom";

import { Row,Col } from 'react-bootstrap';
import { MyNavbarScreen, TopLine } from '../myNavbar/MyNavbar';
import FooterContent from '../footer/MyFooter';
import { getAll,getBy} from "./detailApi";
import { useTranslation } from 'react-i18next';



//IMAGES



function TableContent(props){
  const { t,i18n} = useTranslation();
    return(
        <div>
  <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">{t("composition")}</th>
                    <th scope="col">{t("sizesm")}</th>
                    <th scope="col">{t("quantity")}</th>
                    </tr>
                </thead>
                <tbody>

                  {
                    props.list.map((item,index)=>(
                      <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>
                        {
                          i18n.language==="en" ? item.nameen:
                          i18n.language==="uz" ? item.nameuz:
                          item.name
                          }
                      </td>
                      <td>{item.size}</td>
                      <td>{item.count}</td>
                      </tr>
                    ))
                  }
                    
                  
                </tbody>
                </table>
        </div>
    )
}


function ProductContent(props){
  //const { t,i18n} = useTranslation();
    const navigate=useNavigate();

  return(
    <div>
      <div className="container">
      <Row className='row-cols-auto justify-content-center g-3'>
        {props.list.length>0 && 
            props.list.map((item,index)=>(
                <Col key={index}
                  onClick={()=>{
                  navigate("/detail",{state:item});
              }}
                >
                     <div className="position-relative d-inline-block mt-5">
                
                    <img className="rounded-3 object-fit-cover" src={item.imgUrl} height={220} width={350} alt=""></img>
                    <div className="position-absolute top-100 start-50 translate-middle w-100">
                        <div className="rounded-2 mx-3 px-3 py-2 text-center" ><h4 className="m-0 fw-bold fs-6" style={{fontFamily:"montserratmedium"}}>{
                          index+1
                          // i18n.language==="en" ? item.nameen:
                          // i18n.language==="uz" ? item.nameuz:
                          // item.name
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

   const location=useLocation();
  const data=location.state;
  const {i18n, t} = useTranslation();
  return(
    <div className="d-flex mt-5">
      <br />
      <br />
      <br />
      <br />
      
      <Col className=" mx-auto text-center d-flex flex-column">
          <h1><strong  style={{ fontFamily: "montserratExtraBold",color:"#0f63aa" }}>{t("composition")} {
                          i18n.language==="en" ? data.nameen:
                          i18n.language==="uz" ? data.nameuz:
                          data.name }</strong></h1>
          <small>{t("compdesc")}</small>
      </Col>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}




function ItemScreen(){

  

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
          setArray(res.items);
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
      <div className="sticky-top bg-white">
            <TopLine></TopLine>
            <div className="container-lg">
                <MyNavbarScreen></MyNavbarScreen>
            </div>
      </div>
      <br />
      <br />
      <br />
      <BigTextContent></BigTextContent>

        <div className='container'>
          {array.length>0 && 
                   <TableContent list={array}></TableContent>
        }
        <br />
        {array.length>0 && 
                  <ProductContent list={array}></ProductContent>
          }
        </div>
      
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


export  {ItemScreen};