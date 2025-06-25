const form = document.getElementById("genarate-form");
const qr = document.getElementById("qrcode");


const onGenarateSubmit = (e) => {
    e.preventDefault();
    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    console.log(url, size);

    if(url === ""){
        alert("please enter a valid URL!");
    }

    else{
        showSpinner();
        setTimeout(() => {
            hideSpinner()
        }, 1000);
    }

};  


const showSpinner = function() {
    document.getElementById("spinner").style.display = "block";
};

const hideSpinner = function() {
    document.getElementById("spinner").style.display = "none";
};

hideSpinner();
form.addEventListener("submit", onGenarateSubmit)
