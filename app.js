console.log("AYO! This is Jeo!")

// Section 1
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

// Section 2
document.getElementById("keyboard").addEventListener("keydown", board)

  function board(event) {
    if (event.ctrlKey && event.key === "j") {
        document.getElementById("keyDemo").innerHTML = "You pressed a button combo on the keyboard to read this!"
    }
  }


// Section 3
let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}