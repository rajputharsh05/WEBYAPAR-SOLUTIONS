const submitButton = document.getElementById("btn");
const viewButton = document.getElementById("view-btn");


function handleusersubmit(){
    const p = document.getElementById("p");
    console.log(window.location.href)
    window.location.href = "UserDetailUpload.html";
    p.innerText = Window;
}

function handleuserview(){
    window.location.href = "admintable.html";
}

submitButton.addEventListener("click" ,handleusersubmit);
viewButton.addEventListener("click" ,handleuserview);
