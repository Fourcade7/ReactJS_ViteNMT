


const addCategoryUrl="http://217.199.252.10:3000/category/image";
const updateCategoryUrl="http://217.199.252.10:3000/category/update";
const getAllCategoryUrl="http://217.199.252.10:3000/category/getall";
const deleteCategoryUrl="http://217.199.252.10:3000/category/delete";


const addProductUrl="http://217.199.252.10:3000/product/image";
const updateProductUrl="http://217.199.252.10:3000/product/update";
const getAllProductUrl="http://217.199.252.10:3000/product/getall";
const deleteProductUrl="http://217.199.252.10:3000/product/delete";


const addItemUrl="http://217.199.252.10:3000/item/image";
const updateItemUrl="http://217.199.252.10:3000/item/update";
const getAllItemUrl="http://217.199.252.10:3000/item/getall";
const deleteItemUrl="http://217.199.252.10:3000/item/delete";


async function addCategory(name,nameuz,nameen,file) {

    let formdata=new FormData();
    formdata.append("imageKey", file);
    formdata.append("name", name);
    formdata.append("nameuz", nameuz);
    formdata.append("nameen", nameen);
    
    try{
       
        let response = await fetch(addCategoryUrl,{
            method:"POST",
            body:formdata
            //body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        let result=await response.json();
        return result;

        
    }catch(error){
        console.log(error)
    }
}

async function updateCategory(id,name,nameuz,nameen,file) {

    let formdata=new FormData();
    formdata.append("imageKey", file);
    formdata.append("name", name);
    formdata.append("nameuz", nameuz);
    formdata.append("nameen", nameen);
    
    try{
       
        let response = await fetch(`${updateCategoryUrl}/${id}`,{
            method:"PATCH",
            body:formdata
            //body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        let result=await response.json();
        return result;

        
    }catch(error){
        console.log(error)
    }
}

async function getAllCategory() {
    try{
        let response = await fetch(getAllCategoryUrl,{
            method:"GET",
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        let result = await response.json();
        //console.log(result);
        return result;


    }catch(error){
        console.log(error)
    }
}


async function deleteCategory(id) {

    try{
        let response = await fetch(`${deleteCategoryUrl}/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
         });

         let result = await response.json();
         //console.log(response);
         
         return result;

    }catch(error){
         console.error("userGetBy error:", error);
         return null;
    }
    
}

//PRODUCT
async function addProduct(id,name,nameuz,nameen,file) {

    let formdata=new FormData();
    formdata.append("imageKey", file);
    formdata.append("name", name);
    formdata.append("nameuz", nameuz);
    formdata.append("nameen", nameen);
    formdata.append("categoryId", id);
    
    try{
       
        let response = await fetch(addProductUrl,{
            method:"POST",
            body:formdata
            //body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        let result=await response.json();
        return result;

        
    }catch(error){
        console.log(error)
    }
}
async function updateProduct(id,name,nameuz,nameen,file) {

    let formdata=new FormData();
    formdata.append("imageKey", file);
    formdata.append("name", name);
    formdata.append("nameuz", nameuz);
    formdata.append("nameen", nameen);
    
    try{
       
        let response = await fetch(`${updateProductUrl}/${id}`,{
            method:"PATCH",
            body:formdata
            //body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        let result=await response.json();
        return result;

        
    }catch(error){
        console.log(error)
    }
}

async function getAllProduct() {
    try{
        let response = await fetch(getAllProductUrl,{
            method:"GET",
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        let result = await response.json();
        //console.log(result);
        return result;


    }catch(error){
        console.log(error)
    }
}


async function deleteProduct(id) {

    try{
        let response = await fetch(`${deleteProductUrl}/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
         });

         let result = await response.json();
         //console.log(response);
         
         return result;

    }catch(e){
         console.error("userGetBy error:", e.error);
         return null;
    }
    
}


//ITEM


async function addItem(id,name,nameuz,nameen,file,ref,size,count) {

    let formdata=new FormData();
    formdata.append("imageKey", file);
    formdata.append("name", name);
    formdata.append("nameuz", nameuz);
    formdata.append("nameen", nameen);
    formdata.append("productId", id);
    formdata.append("ref", ref);
    formdata.append("size", size);
    formdata.append("count", count);
    
    try{
       
        let response = await fetch(addItemUrl,{
            method:"POST",
            body:formdata
            //body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        let result=await response.json();
        return result;

        
    }catch(error){
        console.log(error)
    }
}
async function updateItem(id,name,nameuz,nameen,file,ref,size,count) {

    let formdata=new FormData();
    formdata.append("imageKey", file);
    formdata.append("name", name);
    formdata.append("nameuz", nameuz);
    formdata.append("nameen", nameen);
    formdata.append("ref", ref);
    formdata.append("size", size);
    formdata.append("count", count);
    
    try{
       
        let response = await fetch(`${updateItemUrl}/${id}`,{
            method:"PATCH",
            body:formdata
            //body: JSON.stringify(data), // body data type must match "Content-Type" header
        });

        let result=await response.json();
        return result;

        
    }catch(error){
        console.log(error)
    }
}

async function getAllItem() {
    try{
        let response = await fetch(getAllItemUrl,{
            method:"GET",
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        let result = await response.json();
        //console.log(result);
        return result;


    }catch(error){
        console.log(error)
    }
}


async function deleteItem(id) {

    try{
        let response = await fetch(`${deleteItemUrl}/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
         });

         let result = await response.json();
         //console.log(response);
         
         return result;

    }catch(e){
         console.error("userGetBy error:", e.error);
         return null;
    }
    
}


export {addCategory,updateCategory,getAllCategory,deleteCategory,addProduct,updateProduct,getAllProduct,deleteProduct,addItem,updateItem,getAllItem,deleteItem}