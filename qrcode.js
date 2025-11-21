//data URLs are text representation of a file
//data URLs provide a way to include small data items directly into HTML and CSS documents

const qrcodeURL = document.getElementById("qrcode-url");
const qrcodeButton = document.getElementById("qrcode-button");
const qrcodeImage = document.getElementById("qrcode-image");

// qrcodeButton.addEventListener("click", async function() {
//     const dataURL = await QRCode.toDataURL(qrcodeURL.value);
//     console.log(dataURL);
//     qrcodeImage.src = dataURL;
// });

qrcodeButton.addEventListener("click", () => {
    QRCode.toDataURL(qrcodeURL.value).then(dataURL => {
        console.log(dataURL);
        qrcodeImage.src = dataURL;
    })
});