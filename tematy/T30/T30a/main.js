const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
const image = document.getElementById("obraz");
    const color = document.getElementById("color").value;
    const width = parseInt(document.getElementById("range").value);

    const canvas = document.createElement("canvas");
    canvas.width = image.width + 2 * width;
    canvas.height = image.height + 2 * width;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height); // wypełnienie tła kolorem ramki

    ctx.clearRect(width, width, image.width, image.height); // wycięcie środka dla obrazka

    ctx.drawImage(image, width, width); // dodanie obrazka

    image.parentNode.insertBefore(canvas, image.nextSibling); // dodanie canvasu za obrazkiem
    image.style.display = "none"; // ukrycie oryginalnego obrazka
})