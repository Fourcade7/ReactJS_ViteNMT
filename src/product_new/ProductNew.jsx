
import { useState, useEffect } from 'react';
import { useNavigate,useLocation } from "react-router-dom";

import { Row,Col } from 'react-bootstrap';
import { MyNavbarScreen, TopLine } from '../myNavbar/MyNavbar';
import FooterContent from '../footer/MyFooter';
import { getAll ,getBy} from "./productApi";
import { useTranslation } from 'react-i18next';
import top1 from "../assets/banneproducts.jpg"


import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import TabScreen1 from "./tabScreen1";
import TabScreen2 from "./tabScreen2";
import TabScreen3 from "./tabScreen3";

import { getAllCategory } from "./adminApi";


function TabsExample() {
 
   let [selectedCategory,setSelectedCategory]=useState("")
    let [selectedCategoryId,setSelectedCategoryId]=useState(-1)
   const [categoryReulst,setCategoryResult]=useState(null);
  async function fetchData() {
        
        const cResult=await getAllCategory();
        setCategoryResult(cResult);
        
    }

    useEffect(()=>{
        fetchData();
    },[])

 
   const [activeKey, setActiveKey] = useState('#link1');
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row className="mt-2 g-2">
        <Col sm={3}>
         <ListGroup className='rounded-0' activeKey={activeKey} onSelect={setActiveKey}>

          { categoryReulst &&(
                categoryReulst.map(item=>(
                  <ListGroup.Item
                      key={item.id}
                      action
                      onClick={() => {
                        setActiveKey(item.id);
                        setSelectedCategory(item.name);
                        setSelectedCategoryId(item.id);
                        console.log(selectedCategoryId);
                        
                      }}
                      style={{
                        backgroundColor: activeKey === item.id ? '#048bfe' : 'transparent',
                        color: activeKey === item.id ? 'white' : 'black'
                      }}
                    >
                      {item.name}
                    </ListGroup.Item>
             )))}
      
     
    </ListGroup>

        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane className="" eventKey="#link1">
              <ProductContent catId={selectedCategoryId}></ProductContent>
            </Tab.Pane>
            <Tab.Pane className="" eventKey="#link2">Tab2</Tab.Pane>
            <Tab.Pane className="" eventKey="#link3">Tab3</Tab.Pane>
            
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}


//IMAGES
function TopContent(){

  const { t} = useTranslation();
  
    return(
        <div>
            <Row className="g-0" style={{backgroundColor:"#048bfe"}}>
                <Col  className="d-flex align-items-center justify-content-center col-12 col-md-12 col-xl-6 col-xxl-6 col-lg-6 col-sm-12  p-5 text-white" style={{backgroundColor:"#048bfe"}}>
                    <h4 className=" p-0 m-0" style={{fontFamily:"montserratmedium"}}>{t("topdesc")}</h4>
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

function ProductContent(props){
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
    
    if(props.catId!==-1){
     
      console.log("props.catId");
      console.log(props.catId);
      
      await getBy(props.catId).then(res => {
        setArray(res.products);
        console.log("ID", res);
      });
    }
    

      
    } 
    load();
    },[props.catId]);

  return(
    <div>
      <div className="container">
      <Row className='row-cols-auto g-3'>
        {array.length>0 && 
            array.map((item,index)=>(
                <Col key={index}
                  onClick={()=>{
                  navigate("/detail",{state:item});
              }}
                >
                    <div className="d-flex flex-column" style={{width: "300px"}}>
                
                    <img className="rounded-3 object-fit-cover" src={item.imgUrl} height={220} width={300} alt=""></img>
                    <div  className=" w-100 mt-3">
                        <div className="rounded-2 mx-3 px-3 py-2 text-center"><h4 className="m-0 fw-bold" style={{fontFamily:"montserratmedium"}}>{
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
          <h1><strong  style={{ fontFamily: "montserratExtraBold",color:"#0f63aa" }}>{t("ourproducts")}</strong></h1>
          <small>{t("ourproductsshow")}</small>
      </Col>
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}




function ProductScreenNew(){

 

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
      <br />
      <BigTextContent></BigTextContent>
       <div className="container">
                   <TabsExample></TabsExample>
       </div>
       <br />
       <br />
       <br />
      

     
      <br />
      <br />
      <FooterContent></FooterContent>

    </div>
  )
}


export  {ProductScreenNew};