



const urlGetAll="http://217.199.252.10:3000/item/getall";
const urlGetBy="http://217.199.252.10:3000/product/getby";

async function getAll() {
    try {
        

        let response = await fetch(urlGetAll, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        //console.log(result);
        return result;

    } catch (error) {
        console.error("Pagination request error:", error);
        return null;
    }
}


async function getBy(id) {
    try {
        

        let response = await fetch(`${urlGetBy}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        console.log(result);
        return result;

    } catch (error) {
        console.error("Pagination request error:", error);
        return null;
    }
}


export {getAll,getBy}
