const a = parseInt(prompt("Podaj a"))
const b = parseInt(prompt("Podaj b"))
    let y

    if (a  <= 0 && b <= 0) {
        document.write("I = 1")
        y = 0
    } else if (a <= 0 && b >= 0 ) {
        document.write("I = 2")
        y = 1
    } else if (a > 0 && b <= 0) {
       document.write("I = 3")
        y = 2
    } else {
        document.write("I = 4")
        y = 3
    }

  document.write(`<br> y = ${y}`)