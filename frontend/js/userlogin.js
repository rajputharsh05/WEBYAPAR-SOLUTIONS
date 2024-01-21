const btn = document.getElementById("btn");
btn.addEventListener("click", clickHandler);

async function clickHandler() {
    
    try {
        const emptyStr = "";
        const idEle = document.getElementById("id");
        const passwordEle = document.getElementById("password");
        const ID = idEle.value;
        const password = passwordEle.value;
        idEle.value = emptyStr;
        passwordEle.value = emptyStr;
        console.log(ID, password);

        if (ID && password) {

            const URL = `http://localhost:4000/login?id=${ID}&password=${password}`;

            const response = await fetch(URL, {
                method: 'GET',
                credentials: 'include',
            });

            // Retrieve 'Set-Cookie' header
            const headers = response.headers;

            const headersObject = {};
            headers.forEach((value, name) => {
                headersObject[name] = value;
            });

            console.log('Response Headers:', headersObject);

            const setCookieHeader = response.headers.get("JWT");

            console.log('Set-Cookie Header:', setCookieHeader);
            alert(setCookieHeader)
            // Access other headers if needed
            

            if (!response.ok) {

                throw new Error("HTTP SERVER ERROR");

            } else {

                console.log("Moving to the next page");

                window.location.href = "userDetailUpload.html";

            }
        }
    } catch (error) {
        console.log(error);
    }
}
