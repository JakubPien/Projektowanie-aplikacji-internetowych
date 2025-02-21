const div = document.querySelector("div");

function pokazDate () {
    div.innerHTML = new Date().toLocaleDateString();
}

function pokazTekst() {
    div.innerHTML = " Data już była ;)"
}

div.addEventListener("mouseover", pokazDate);

div.addEventListener("mouseleave", function() {
   div.innerHTML = "";
   div.removeEventListener("mouseover", pokazDate);
   div.addEventListener("mouseover", pokazTekst);
});