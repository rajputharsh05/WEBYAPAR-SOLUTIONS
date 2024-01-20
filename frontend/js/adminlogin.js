const btn = document.getElementById("btn");
btn.addEventListener("click", clickHandler)

async function clickHandler() {
    console.log("Helleo");
    try{
        const emptyStr = "";
        const idEle = document.getElementById("id");
        const passwordEle = document.getElementById("password");
        const ID = idEle.value;
        const password = passwordEle.value;
        idEle.value = emptyStr;
        passwordEle.value = emptyStr;
        console.log(ID,password);
        
        
        if(ID && password){
            const URL = `http://localhost:4000/login?id=${ID}&password=${password}`;
            const response = await fetch(URL) 

            if(!response.ok){
                throw new Error("HTTP SERVER ERROR")
            }else{
                window.location.href = "admindashboard.html";
            }
        }
    }catch(error){
        console.log(error);
    }
}
