function generateBarcode() {
    var barcodeText = document.getElementById("barcodeInput").value;
    JsBarcode("#barcodeDisplay", barcodeText);
}

function generateBarcode2() {
    var barcodeText = document.getElementById("barcodeInput2").value;
    JsBarcode("#barcodeDisplay2", barcodeText);
}

function downloadBarcodeImage(elementId, filename) {
    const svgElement = document.getElementById(elementId);
    const svgData = new XMLSerializer().serializeToString(svgElement);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = filename;
        link.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
}
