const form = document.getElementById("genarate-form");
const qr = document.getElementById("qrcode");



const onGenarateSubmit = (e) => {
    e.preventDefault();
    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    console.log(url, size);

};  




form.addEventListener("submit", onGenarateSubmit)
