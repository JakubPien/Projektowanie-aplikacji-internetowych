const username = document.querySelector("#username");
const email = document.querySelector("#e-mail");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const btn = document.querySelector("button");
const wynik = document.querySelector("#wynik");

btn.addEventListener("click", function() {
    let nazwa = username.value;
    let haslo = password.value;
    // Poprawione wyrażenie regularne
    const emailRegex = /^[^\s@]+@zspglogow\.pl$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=$$$${};':"\\|,.<>\/?]).{8,}$/;

    if (username.value.trim() === "") {
        alert("Nazwa użytkownika nie może być pusta!");
    } else if (email.value.trim() === "") {
        alert("Adres e-mail nie może być pusty!");
    } else if (!emailRegex.test(email.value)) {
        alert("Nieprawidłowy adres e-mail. Proszę podać adres z domeną zspglogow.pl.");
    }

    if (!passwordRegex.test(password.value)) {
        alert("Hasło musi zawierać minimum 8 znaków, małe i duże litery, cyfry oraz znaki specjalne!");
    } else if (password.value !== confirmPassword.value) {
        alert("Hasła nie pasują do siebie!");
    } else {
        wynik.innerHTML = `
            Nazwa użytkownika: ${nazwa} <br>
            Adres e-mail: ${email.value} <br>
            Hasło: ${haslo} <br>
        `;
    }
});
