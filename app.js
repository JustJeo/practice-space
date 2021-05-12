document.getElementById("btn").addEventListener("click", timer)

  function timer () {
    let num1 = parseInt(prompt("Enter your first number: "))
    let num2 = parseInt(prompt("Enter your second number: "))
    let results = (num1 + num2)
    console.log(results)
    const timeInterval = setInterval(() => {
      if (results === 0) {
        clearInterval(timeInterval)
      } else {
        results--
        console.log(results)
      }
    }, 1000)  
  document.getElementById("demoText").innerHTML = results
  }

document.getElementById("keyboard").addEventListener("click", board)

  function board() {
    
  }