document.getElementById("btn").addEventListener("click", sum)

  function sum () {
    let num1 = parseInt(prompt("Enter your first number: "))
    let num2 = parseInt(prompt("Enter your second number: "))
    let results = (num1 + num2)
    document.getElementById("demoText").innerHTML = results
}