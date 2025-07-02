


document.addEventListener('DOMContentLoaded', function() {
  // get button as a variable
  const consoleButton = document.querySelector('#console-hello-button')  //use # for id
  consoleButton.addEventListener('click', function() {
    log("Hello")
  })

  const webpgButton = document.querySelector('#webpg-hello-button')
  webpgButton.addEventListener('click', sayHelloToWebPage)

})

// FUNCTIONS
function sayHelloToConsole() {
  log("Hello")
}

function sayHelloToWebPage() {
  const body = document.querySelector('body')
  const p = document.createElement('p')
  p.textContent = "Hello"  //or p.innerText
  body.appendChild(p)
}
