
import { useEffect, useRef, useState } from "react";

import { Dropdown,InputGroup,DropdownButton,Form,Button,Row ,Modal,Spinner,ProgressBar} from "react-bootstrap";
import { getAllProduct } from "./adminApi";
import { addItem,getAllItem,deleteItem,updateItem } from "./adminApi";

import imgdelete from "../assets/trash.png"
import imgadd from "../assets/addd.png"
import edit from "../assets/pencil.png"


function TabScreen3(){

    const [show, setShow] = useState(false);
    
    let [selectedProduct,setSelectedProduct]=useState("")
    let [selectedProductId,setSelectedProductId]=useState(-1)
    const [productReulst,setProductResult]=useState(null);
    const [itemName,setItemName]=useState("");
    const [itemNameUZ,setItemNameUZ]=useState("");
    const [itemNameEN,setItemNameEN]=useState("");
    const [itemRefcode,setItemRefcode]=useState("");
    const [itemSize,setItemSize]=useState("");
    const [itemCount,setItemCount]=useState("");
    const [itemReulst,setItemResult]=useState(null);

    const fileInputRef=useRef(null);


    async function fetchData() {
        setShow(true);
        const pResult=await getAllProduct();
        setProductResult(pResult);
        const iResult=await getAllItem();
        setItemResult(iResult);
        setShow(false);
    }

    useEffect(()=>{
        fetchData();
    },[])


    return(
        <div className="w-100">
          <div className="rounded border p-3">
            <div className="d-flex  align-items-centerx justify-content-center">
                <p className="m-0">Здесь вы можете управлять состав</p>
                <Button 
                variant="primary ms-auto"
                style={{backgroundColor:"#2B4293"}}
                onClick={async()=>{
                     setShow(true);
                     await addItem(selectedProductId,itemName,itemNameUZ,itemNameEN,fileInputRef.current.files[0],itemRefcode,itemSize,itemCount);
                     const iResult=await getAllItem();
                     setItemResult(iResult);
                     setShow(false);
                }}
                >
                  <div className="d-flex align-items-center">
                    <img src={imgadd} width={15} height={15}></img>
                    <p className="m-0 ms-2">Добавить новый</p>
                  </div>
                  </Button>
            </div>
            <InputGroup className="my-3">
            <Form.Control value={selectedProduct} disabled placeholder="Выберите продукт из списка" aria-label="Text input with dropdown button" />

            <DropdownButton
            variant="outline-secondary"
            title="Список продуктов"
            id="input-group-dropdown-1"
            align="end"
            
            >
            { productReulst &&(
                productReulst.map(item=>(
                    <Dropdown.Item 
                    href="#"
                    key={item.id}
                    onClick={()=>{
                        setSelectedProduct(item.name);
                        setSelectedProductId(item.id);
                    }}
                    >{item.name}</Dropdown.Item>
                ))
            )}
                </DropdownButton>
            </InputGroup>
            <small>Состав данных</small>
            <Form.Control className="mt-2" type="text" placeholder="Имя RUS"
            value={itemName}
            onChange={(e)=>{setItemName(e.target.value)}}
            />
             <Form.Control className="mt-2" type="text" placeholder="Имя UZB"
            value={itemNameUZ}
            onChange={(e)=>{setItemNameUZ(e.target.value)}}
            />
             <Form.Control className="mt-2" type="text" placeholder="Имя ENG"
            value={itemNameEN}
            onChange={(e)=>{setItemNameEN(e.target.value)}}
            />
             <Form.Control className="mt-2" type="text" placeholder="REFCODE"
            value={itemRefcode}
            onChange={(e)=>{setItemRefcode(e.target.value)}}
            />
             <Form.Control className="mt-2" type="text" placeholder="Размер 240x330"
            value={itemSize}
            onChange={(e)=>{setItemSize(e.target.value)}}
            />
             <Form.Control className="mt-2" type="text" placeholder="1 шт или мл"
            value={itemCount}
            onChange={(e)=>{setItemCount(e.target.value)}}
            />


            <Form.Group controlId="formFile" className="mt-3">
                <small>Выберите изображение</small>
                <Form.Control type="file" ref={fileInputRef} />
            </Form.Group>
            </div>

            {itemReulst &&(
            <ItemScreenAdmin list={itemReulst}></ItemScreenAdmin>

            )}


            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                <Modal.Title>Подождите</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex flex-column">
                    <Spinner className="mx-auto" animation="border" />
                     <small className="mx-auto mt-2">Пожалуйста, подождите, пока идет загрузка на сервер.</small>
                    <ProgressBar className="mt-3" animated  variant="dark" now={100} />
                  </div>
                </Modal.Body>
                
            </Modal>

            

        </div>
    )
}


function ItemScreenAdmin(props){

      const [iid, setIid] = useState(-1);

      const [showEdit, setShowEdit] = useState(false);
      const [showDel, setShowDel] = useState(false);

    const [itemName,setItemName]=useState("");
    const [itemNameUZ,setItemNameUZ]=useState("");
    const [itemNameEN,setItemNameEN]=useState("");
    const [itemRefcode,setItemRefcode]=useState("");
    const [itemSize,setItemSize]=useState("");
    const [itemCount,setItemCount]=useState("");
    const fileInputRef=useRef(null);

    
    return(
        <div className="border rounded p-3  mt-3">
            <p className="m-0">Последние добавленные состав</p>
            <Row className="row-cols-auto mt-3 g-2">
            
           {props.list.slice().reverse().map(item=>(

             <div className="col" key={item.id}>
             <div className="card h-100" style={{width: "13rem"}}>
                <img src={item.imgUrl} height={150} className="card-img-top object-fit-cover" alt="..."></img>
                <div className="card-body p-2 d-flex flex-column"> 
                <p className="card-title">{item.name}</p>
                <small>{item.ref}</small>
                <small>{item.size}</small>
                <small className="mb-2">{item.count}</small>
               <div className="d-flex mt-auto">
                <div className="ms-auto">
                                   <Button className="btn btn-light"
                                     onClick={()=>{
                                         setShowEdit(true);
                                         setIid(item.id);
                                         setItemName(item.name);
                                         setItemNameUZ(item.nameuz);
                                         setItemNameEN(item.nameen);
                                         setItemRefcode(item.ref);
                                         setItemSize(item.size);
                                         setItemCount(item.count);
                                         
                                     }}
                                     >
                                     <small className="me-2">Изменить</small>
                                     <img src={edit} width={18} height={18}></img>
                                     </Button>
                   </div>               
                 
                <div className="ms-auto">
                    <Button className="btn btn-light"
                    onClick={()=>{
                        setShowDel(true);
                        setIid(item.id);
                        console.log(item.id);
                        
                    }}
                    >
                    <img src={imgdelete} width={17} height={17}></img>
                    </Button>
                </div>
               </div>

                </div>
            </div>
            </div>
                ))
            }

            </Row>
            {
            //Edit
            }
            <Modal show={showEdit} onHide={() => setShowEdit(false)} centered>
                <Modal.Header closeButton>
                <Modal.Title>Редактировать</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <small>Состав данных</small>
                        <Form.Control className="mt-2" type="text" placeholder="Имя RUS"
                        value={itemName}
                        onChange={(e)=>{setItemName(e.target.value)}}
                        />
                        <Form.Control className="mt-2" type="text" placeholder="Имя UZB"
                        value={itemNameUZ}
                        onChange={(e)=>{setItemNameUZ(e.target.value)}}
                        />
                        <Form.Control className="mt-2" type="text" placeholder="Имя ENG"
                        value={itemNameEN}
                        onChange={(e)=>{setItemNameEN(e.target.value)}}
                        />
                        <Form.Control className="mt-2" type="text" placeholder="REFCODE"
                        value={itemRefcode}
                        onChange={(e)=>{setItemRefcode(e.target.value)}}
                        />
                        <Form.Control className="mt-2" type="text" placeholder="Размер 240x330"
                        value={itemSize}
                        onChange={(e)=>{setItemSize(e.target.value)}}
                        />
                        <Form.Control className="mt-2" type="text" placeholder="1 шт или мл"
                        value={itemCount}
                        onChange={(e)=>{setItemCount(e.target.value)}}
                        />


                        <Form.Group controlId="formFile" className="mt-3">
                            <small>Выберите изображение</small>
                            <Form.Control type="file" ref={fileInputRef} />
                        </Form.Group> 
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowEdit(false)}>
                   Отмена
                </Button>
                <Button variant="warning" onClick={async ()=>{
                    setShowEdit(false)
                    await updateItem(iid,itemName,itemNameUZ,itemNameEN,fileInputRef.current.files[0],itemRefcode,itemSize,itemCount);
                    }}>
                    Сохранять
                </Button>
                </Modal.Footer>
            </Modal>
            {
            //delete
            }
            <Modal show={showDel} onHide={() => setShowDel(false)} centered>
                <Modal.Header closeButton>
                <Modal.Title>Удалить</Modal.Title>
                </Modal.Header>
                <Modal.Body>Вы уверены, что хотите его удалить?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowDel(false)}>
                    Отмена
                </Button>
                <Button variant="danger" 
                onClick={ async ()=>{
                  setShowDel(false);
                  await deleteItem(iid);
                  //window.location.reload();
                }
                }>
                    Удалить
                </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}



export default TabScreen3;