import { Button } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import TabScreen1 from "./tabScreen1";
import TabScreen2 from "./tabScreen2";
import TabScreen3 from "./tabScreen3";
import { MyNavbarScreen, TopLine } from "../myNavbar/MyNavbar";





function TabsExample() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row className="mt-2 g-2">
        <Col sm={3}>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Категории
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Продукты
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Состав
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane className="" eventKey="#link1"><TabScreen1></TabScreen1></Tab.Pane>
            <Tab.Pane className="" eventKey="#link2"><TabScreen2></TabScreen2></Tab.Pane>
            <Tab.Pane className="" eventKey="#link3"><TabScreen3></TabScreen3></Tab.Pane>
            
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}





function AdminScreen(){
    return(
        <div className="">
             <TopLine></TopLine>
             <div className='container'>
                <MyNavbarScreen></MyNavbarScreen>
              </div>
             <br />
                <div className="container">
                   <TabsExample></TabsExample>
                </div>
              
               
              
                
           
             
          
        </div>
    )
}




export default AdminScreen;