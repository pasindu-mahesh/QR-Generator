const form = document.getElementById("genarate-form");
const qr = document.getElementById("qrcode");


const onGenarateSubmit = (e) => {
    e.preventDefault();
    cleanUI();
    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    console.log(url, size);

    if(url === ""){
        alert("please enter a valid URL!");
    } else{
        showSpinner();

        setTimeout(() => {
            hideSpinner()
            generateQrCode(url, size);

            setTimeout(()=> {
                const saveurl =qr.querySelector("img").src;
                createSaveBtn(saveurl);
            }, 50);
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

const cleanUI = function(){
    qr.innerHTML = "";
}


const showSpinner = function() {
    document.getElementById("spinner").style.display = "block";
};

const hideSpinner = function() {
    document.getElementById("spinner").style.display = "none";
};

const createSaveBtn = function(saveUrl) {

const link = document.createElement("a");
link.id = "savelink";
link.classList = "download-btn";
link.href = saveUrl;
link.download = "QRcode";
link.innerHTML = "Save image";
document.getElementById("generated").appendChild(link);
};
 
hideSpinner();
form.addEventListener("submit", onGenarateSubmit)
