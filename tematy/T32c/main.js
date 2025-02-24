const btn = document.querySelector('button');
const name = document.querySelector('#form-name');
const email = document.querySelector('#form-email');
const tel = document.querySelector('#form-tel');
const story = document.querySelector('#form-story');
const color = document.querySelectorAll('input[name="color"]');
const chek_laces = document.querySelector('#chek_laces');
const chek_logo = document.querySelector('#chek_logo');
const chek_heels = document.querySelector('#chek_heels');
const chek_mp3 = document.querySelector('#chek_mp3');
const size = document.querySelector('#size');

btn.addEventListener('click', e => {
    let imie = name.value;
    let e_mail = email.value;
    let telefon = tel.value;
    let historia = story.value;
    let kolor;
    let rozmiar = size.options[size.selectedIndex].text;

    let opcje = ""
    if (chek_laces.checked)
        opcje += "Błyszczące sznórówki <br>"
    if (chek_logo.checked)
        opcje += "Metalowe logo <br>"
    if (chek_heels.checked)
        opcje += "Świecąca podeszwa <br>"
    if (chek_mp3.checked)
        opcje += "Odtwarzanie MP3 <br>"

    for (let i = 0; i < color.length; i++) {
        if (color[i].checked) {
            kolor = color[i].value;
            break;
        }
    }


    wynik.innerHTML =
        `
            Podane Dane: <br>
        Imie i Nazwisko: ${imie} <br>
        E-mail: ${e_mail} <br>
        Telefon: ${telefon} <br>
        Historia: ${historia} <br>
         <br><hr>
            Trampki: <br>
        Kolor:  <br>
            ${kolor} <br>
        Opcje: <br>
            ${opcje}
        Rozmiar: <br>
            ${rozmiar}  <br>
        `
})