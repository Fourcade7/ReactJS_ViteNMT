
import { useEffect, useRef, useState } from "react";

import { Dropdown,InputGroup,DropdownButton,Form,Button,Row ,Modal,Spinner,ProgressBar} from "react-bootstrap";
import { deleteProduct, getAllCategory } from "./adminApi";
import { addProduct,getAllProduct,updateProduct } from "./adminApi";


import imgdelete from "../assets/trash.png"
import imgadd from "../assets/addd.png"
import edit from "../assets/pencil.png"

function TabScreen2(){

    const [show, setShow] = useState(false);
    
    let [selectedCategory,setSelectedCategory]=useState("")
    let [selectedCategoryId,setSelectedCategoryId]=useState(-1)
    const [productName,setProductName]=useState("");
    const [productNameUZ,setProductNameUZ]=useState("");
    const [productNameEN,setProductNameEN]=useState("");
    const [categoryReulst,setCategoryResult]=useState(null);
    const [productReulst,setProductResult]=useState(null);

    const fileInputRef=useRef(null);


    async function fetchData() {
        setShow(true);
        const cResult=await getAllCategory();
        setCategoryResult(cResult);
        const pResult=await getAllProduct();
        setProductResult(pResult);
        setShow(false);
    }

    useEffect(()=>{
        fetchData();
    },[])


    return(
        <div>
          <div className="rounded border p-3">
            <div className="d-flex  align-items-centerx justify-content-center">
                <p className="m-0">Здесь вы можете управлять продуктами</p>
                <Button 
                variant="primary ms-auto"
                style={{backgroundColor:"#2B4293"}}
                onClick={async()=>{
                    setShow(true);
                    await addProduct(selectedCategoryId,productName,productNameUZ,productNameEN,fileInputRef.current.files[0]);
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
            <Form.Control value={selectedCategory} disabled placeholder="Выберите категорию из списка" aria-label="Text input with dropdown button" />

            <DropdownButton
            variant="outline-secondary"
            title="Список категорий"
            id="input-group-dropdown-1"
            align="end"
            
            >
            { categoryReulst &&(
                categoryReulst.map(item=>(
                    <Dropdown.Item 
                    href="#"
                    key={item.id}
                    onClick={()=>{
                        setSelectedCategory(item.name);
                        setSelectedCategoryId(item.id);
                    }}
                    >{item.name}</Dropdown.Item>
                ))
            )}
                </DropdownButton>
            </InputGroup>
            <small>Название продукта</small>
            <Form.Control  type="text" className="mt-2" placeholder="Введите название продукта RUS"
            value={productName}
            onChange={(e)=>{setProductName(e.target.value)}}
            />

             <Form.Control  type="text" className="mt-2" placeholder="Введите название продукта UZB"
            value={productNameUZ}
            onChange={(e)=>{setProductNameUZ(e.target.value)}}
            />
             <Form.Control  type="text" className="mt-2" placeholder="Введите название продукта ENG"
            value={productNameEN}
            onChange={(e)=>{setProductNameEN(e.target.value)}}
            />
            <Form.Group controlId="formFile" className="mt-3">
                <small>Выберите изображение</small>
                <Form.Control type="file" ref={fileInputRef} />
            </Form.Group>
            </div>

            {productReulst &&(
            <ProductScreenAdmin list={productReulst}></ProductScreenAdmin>

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


function ProductScreenAdmin(props){

      const [pid, setPid] = useState(-1);

      const [showEdit, setShowEdit] = useState(false);
      const [showDel, setShowDel] = useState(false);

      const [productName,setProductName]=useState("");
      const [productNameUZ,setProductNameUZ]=useState("");
      const [productNameEN,setProductNameEN]=useState("");
      const fileInputRef=useRef(null);

    
    return(
        <div className="border rounded p-3  mt-3">
            <p className="m-0">Последние добавленные категории</p>
            <Row className="row-cols-auto mt-3 g-2">
            
           {props.list.slice().reverse().map(item=>(

             <div className="col" key={item.id}>
             <div className="card h-100" style={{width: "13rem"}}>
                <img src={item.imgUrl} height={150} className="card-img-top object-fit-cover" alt="..."></img>
                <div className="card-body p-2 d-flex flex-column"> 
                <p className="card-title">{item.name}</p>
                
               <div className="d-flex mt-auto">
                 <div className="ms-auto">
                                  <Button className="btn btn-light"
                                    onClick={()=>{
                                        setShowEdit(true);
                                        setPid(item.id);
                                        setProductName(item.name);
                                        setProductNameUZ(item.nameuz);
                                        setProductNameEN(item.nameen);
                                        
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
                        setPid(item.id);
                        console.log(item.id);
                        
                    }}
                    >
                    <img src={imgdelete} width={18} height={18}></img>
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
                   <small>Название продукта</small>
                        <Form.Control  type="text" className="mt-2" placeholder="Введите название продукта RUS"
                        value={productName}
                        onChange={(e)=>{setProductName(e.target.value)}}
                        />

                        <Form.Control  type="text" className="mt-2" placeholder="Введите название продукта UZB"
                        value={productNameUZ}
                        onChange={(e)=>{setProductNameUZ(e.target.value)}}
                        />
                        <Form.Control  type="text" className="mt-2" placeholder="Введите название продукта ENG"
                        value={productNameEN}
                        onChange={(e)=>{setProductNameEN(e.target.value)}}
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
                    
                    await updateProduct(pid,productName,productNameUZ,productNameEN,fileInputRef.current.files[0]);
                    setShowEdit(false)
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
                  await deleteProduct(pid);
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



export default TabScreen2;