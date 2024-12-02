let x = parseInt(prompt("Podaj x"))

    if (x > 100) {
        x = 100
    }

    for (let i = 1; i <= x; i++) {
        document.write(`${i}; `)
    }