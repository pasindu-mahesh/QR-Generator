const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();
  cleanUI();

  const url = document.getElementById("url").value.trim();
  const size = parseInt(document.getElementById("size").value);

  if (url === "") {
    alert("Please enter a valid URL!");
    return;
  }

  showSpinner();

  setTimeout(() => {
    hideSpinner();
    generateQrCode(url, size);

    setTimeout(() => {
      const qrImage = qr.querySelector("img") || qr.querySelector("canvas");
      if (qrImage) {
        // Explicitly set preview size
        qrImage.style.width = `${size}px`;
        qrImage.style.height = `${size}px`;

        const saveUrl = qrImage.toDataURL
          ? qrImage.toDataURL("image/png")
          : qrImage.src;

        createSaveBtn(saveUrl);
      }
    }, 100);
  }, 1000);
};

const generateQrCode = (url, size) => {
  new QRCode(qr, {
    text: url,
    width: size,
    height: size,
  });
};

const cleanUI = () => {
  qr.innerHTML = "";
  const existingLink = document.getElementById("savelink");
  if (existingLink) {
    existingLink.remove();
  }
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};

const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

const createSaveBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.id = "savelink";
  link.className = "download-btn";
  link.href = saveUrl;
  link.download = "qrcode";
  link.innerText = "Save Image";
  document.getElementById("generated").appendChild(link);
};

hideSpinner();
form.addEventListener("submit", onGenerateSubmit);
