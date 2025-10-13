import { Button, Row,Spinner,ProgressBar, Fade } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { addCategory,updateCategory } from "./adminApi";
import { getAllCategory } from "./adminApi";
import { deleteCategory } from "./adminApi";




import imgdelete from "../assets/trash.png"
import imgadd from "../assets/addd.png"
import edit from "../assets/pencil.png"


function TabScreen1(){

   const fileInputRef=useRef(null);
   const [show, setShow] = useState(false);
   const [categoryName,setCategoryName]=useState("");
   const [categoryNameUZ,setCategoryNameUZ]=useState("");
   const [categoryNameEN,setCategoryNameEN]=useState("");
   const [categoryReulst,setCategoryResult]=useState(null);

   async function fetchData(){
    const result=await getAllCategory();
    setCategoryResult(result);
    console.log(result);
   }

   //LaunchedEffect
   useEffect(()=>{
   fetchData();
   },[show])



  return(
        <div>
            <div className="border p-3 rounded">
            <div className="d-flex  align-items-centerx justify-content-center">
                <p className="m-0">Здесь вы можете управлять категориями</p>
                <Button 
                variant="primary ms-auto"
                style={{backgroundColor:"#2B4293"}}
                onClick={async()=>{
                 setShow(true);
                 await addCategory(categoryName,categoryNameUZ,categoryNameEN,fileInputRef.current.files[0]);
                 //let result = await addCategory(categoryName,fileInputRef.current.files[0]);
                 setShow(false);
                }}
                >
                  <div className="d-flex align-items-center">
                    <img src={imgadd} width={15} height={15}></img>
                    <p className="m-0 ms-2">Добавить новый</p>
                  </div>
                  </Button>
            </div>

               
             <small>Название категории</small>
            <Form.Control className="mt-2" type="text" placeholder="введите название категории RUS"
            value={categoryName}
            onChange={(e)=>{setCategoryName(e.target.value)}}
            />
            <Form.Control className="mt-2" type="text" placeholder="введите название категории UZB"
            value={categoryNameUZ}
            onChange={(e)=>{setCategoryNameUZ(e.target.value)}}
            />
            <Form.Control className="mt-2" type="text" placeholder="введите название категории ENG"
            value={categoryNameEN}
            onChange={(e)=>{setCategoryNameEN(e.target.value)}}
            />

            <Form.Group controlId="formFile" className="mt-3">
                <small>Выберите изображение</small>
                <Form.Control type="file" ref={fileInputRef} />
            </Form.Group>
            </div>

            {categoryReulst && (

              <CategoryScreenAdmin list={categoryReulst}></CategoryScreenAdmin>

            )

            }


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




function CategoryScreenAdmin(props){

      const [cid, setCid] = useState(-1);
      //const [selectedItem, setSelectedItem] = useState(null);

      const [showEdit, setShowEdit] = useState(false);
      const [showDel, setShowDel] = useState(false);

      const fileInputRef=useRef(null);
      const [categoryName,setCategoryName]=useState("");
      const [categoryNameUZ,setCategoryNameUZ]=useState("");
      const [categoryNameEN,setCategoryNameEN]=useState("");

    
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
                        setCid(item.id);
                        setCategoryName(item.name);
                        setCategoryNameUZ(item.nameuz);
                        setCategoryNameEN(item.nameen);
                        
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
                        setCid(item.id);
                        props.clickDelete();
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
                    <small>Название категории</small>
                     <Form.Control className="mt-2" type="text" placeholder="введите название категории RUS"
                        value={categoryName}
                        onChange={(e)=>{setCategoryName(e.target.value)}}
                        />
                        <Form.Control className="mt-2" type="text" placeholder="введите название категории UZB"
                        value={categoryNameUZ}
                        onChange={(e)=>{setCategoryNameUZ(e.target.value)}}
                        />
                        <Form.Control className="mt-2" type="text" placeholder="введите название категории ENG"
                        value={categoryNameEN}
                        onChange={(e)=>{setCategoryNameEN(e.target.value)}}
                        />
                    
                      <Form.Group controlId="formFile" className="mt-3">
                          <small>Выберите изображение</small>
                          <Form.Control type="file" ref={fileInputRef} />
                      </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" 
                onClick={() => setShowEdit(false)}>
                   Отмена
                </Button>
                <Button variant="warning" 
                 onClick={async()=>{
                 
                 await updateCategory(cid,categoryName,categoryNameUZ,categoryNameEN,fileInputRef.current.files[0]);
                 //let result = await addCategory(categoryName,fileInputRef.current.files[0]);
                 setShowEdit(false)
                 
                }}
                >
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
                  await deleteCategory(cid);
                  window.location.reload();
                }
                }>
                    Удалить
                </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}


function AlertDialog(props) {
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    console.log("O‘chirildi ✅");
    props.clickable();
    setShow(false);
  };

  return (
    <>
      {/* Modalni ochuvchi tugma */}
      <Button variant="danger" onClick={() => setShow(true)}>
        O‘chirish
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Tasdiqlash</Modal.Title>
        </Modal.Header>
        <Modal.Body>Haqiqatan ham o‘chirmoqchimisiz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Bekor qilish
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Ha, o‘chir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default TabScreen1;