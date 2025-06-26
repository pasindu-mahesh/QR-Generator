const form = document.getElementById("genarate-form");
const qr = document.getElementById("qrcode");


const onGenarateSubmit = (e) => {
    e.preventDefault();
    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    console.log(url, size);

    if(url === ""){
        alert("please enter a valid URL!");
    } else{
        showSpinner();
        setTimeout(() => {
            generateQrCode(url, size);
            hideSpinner()
        }, 1000);
    }

};  

const generateQrCode = function(url, size) {
    const qrcode = new QRCode("qrcode", {
        text:url,
        width:size,
        height:size,
    });
};


const showSpinner = function() {
    document.getElementById("spinner").style.display = "block";
};

const hideSpinner = function() {
    document.getElementById("spinner").style.display = "none";
};

hideSpinner();
form.addEventListener("submit", onGenarateSubmit)
