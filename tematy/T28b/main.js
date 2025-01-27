function daysUntilBirthday(birthday) {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());

    // Jeśli urodziny już były w tym roku, obliczamy datę na następny rok
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    // Obliczamy różnicę w milisekundach
    const differenceInMillis = nextBirthday - today;

    // Przekształcamy różnicę w dni
    const daysUntil = Math.ceil(differenceInMillis / (1000 * 60 * 60 * 24));

    return daysUntil;
}

// Przykład użycia
const myBirthday = new Date('YYYY-MM-DD'); // Wprowadź datę swoich urodzin
console.log(`Do moich urodzin pozostało ${daysUntilBirthday(myBirthday)} dni.`);
