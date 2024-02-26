/* 
function generateBarcode() {
    var barcodeText = document.getElementById("barcodeInput").value;    

    JsBarcode("#barcodeDisplay", barcodeText);
}

function generateBarcode() {

    var barcodeText = document.getElementById("barcodeInput").value; //Num
    var description = document.getElementById("descriptionInput").value; // Capturar la descripción ingresada

    

    JsBarcode("#barcodeDisplay", barcodeText, {
        text: description + "\n" + barcodeText, // Mostrar la descripción arriba del código de barras
        
    
    });


    
    
} */

function generateBarcode() {
    var barcodeText = document.getElementById("barcodeInput").value; // Número de barras
    var description = document.getElementById("descriptionInput").value; // Capturar la descripción ingresada

    // Generar el código de barras
    JsBarcode("#barcodeDisplay", barcodeText, {
        displayValue: true, 
        width: 2, // Ancho de las barras del código de barras
        height: 50, // Altura del código de barras
        margin: 20, // Margen alrededor del código de barras
    });

    // Añadir la descripción como texto SVG
    var svgElement = document.getElementById("barcodeDisplay");
    var svgNS = "http://www.w3.org/2000/svg";
    var textElement = document.createElementNS(svgNS, "text");
    textElement.setAttribute("x", "50%"); // Centrar horizontalmente
    textElement.setAttribute("y", "12"); // Posicionar verticalmente dentro del margen superior
    textElement.setAttribute("text-anchor", "middle"); // Alinear al centro
    textElement.setAttribute("font-size", "15"); // Tamaño de la fuente
    textElement.textContent = description;
    svgElement.appendChild(textElement);
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
