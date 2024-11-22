const num = document.querySelector("#num")
const btn = document.querySelector("button")

btn.addEventListener("click", function() {
    let x = parseInt(num.value)

    if (x > 100)
        x = 100

    for (let i = 1; i <= x; i++) {
        document.writeln(`${i}; `)
    }
})