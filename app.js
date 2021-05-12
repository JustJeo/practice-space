function sum () {
  let num1 = parseInt(prompt("Enter your first number: "))
  let num2 = parseInt(prompt("Enter your second number: "))
  let results = (num1 + num2)

  console.log(results)
}

const fire = document.getElementById("demo").addEventListener("click", sum)