
function addMessage() {
  let message = document.createElement("span")
  message.textContent = "hello"
  message.style.padding = "15px"
  message.style.backgroundColor = "lightgrey"
  message.style.borderRadius = "20px"

  let body = qSel("body")
  body.appendChild(message)
}

document.addEventListener('DOMContentLoaded', function() {
  addMessage()
})


