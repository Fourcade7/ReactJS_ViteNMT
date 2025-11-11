



const urlGetAll="http://95.46.96.153:3000/category/getall";

async function getAll() {
    try {
        

        let response = await fetch(urlGetAll, {
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




async function getTranslatedText() {
    try {
        

        let response = await fetch(`https://api.mymemory.translated.net/get?q=Хирургический комплект для врача  .. Хирургический комплект для пациента &langpair=ru|uz&de=Fourcadeaminov7@gmail.com`, {
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


export {getAll,getTranslatedText}
