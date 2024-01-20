

function handleUpload(){
    document.getElementById("photo").click()
}

function handleFileSelect(){
    const file = document.getElementById("photo");
    const image = file.files[0];
    
    console.log(image);

    if(image){
        alert(image.name)
    }else{
        console.log("kkrh")
    }
}

function handleViewButton(){
    
    const root = document.getElementById("root");
    const hiddenbar = document.getElementById("hidden-bar");
    root.style.setProperty('opacity',0.9);
    hiddenbar.style.setProperty('display',"block");
    
}

function handleCloseButton(){
    const root = document.getElementById("root");
    const hiddenbar = document.getElementById("hidden-bar");
    root.style.setProperty('opacity',1);
    hiddenbar.style.setProperty('display',"none");
}