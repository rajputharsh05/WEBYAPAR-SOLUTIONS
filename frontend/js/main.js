const btn = document.getElementById("btn");

function clickHandler() {
    const p = document.getElementById("p");
    console.log(window.location.href)
    window.location.href = "admindashboard.html"
    p.innerText = Window;
}

btn.addEventListener("click", clickHandler)