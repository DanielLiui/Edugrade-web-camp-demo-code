
let micPressed = false

document.addEventListener('DOMContentLoaded', function() {
  qSel("#mic-button").addEventListener("click", toggleMicrophone2)
})


function toggleMicrophone2() {
  let micButton = qSel("#mic-button")
  let micIcon = micButton.querySelector("i")  //get icon inside micButton element
  micButton.removeChild(micIcon)
  
  if (micButton.classList.contains("mic-pressed")) {
    //show microphone button
    log("Mic unpressed")
    micButton.classList.remove("mic-pressed")

    let micIcon = document.createElement("i")
    micIcon.classList.add("fa-solid")
    micIcon.classList.add("fa-microphone")
    micIcon.style.color = "black"

    micButton.style.backgroundColor = "white"
    micButton.appendChild(micIcon)

  }
  else {  
    //show record button
    log("Mic pressed")
    micButton.classList.add("mic-pressed")

    let recordIcon = document.createElement("i")
    recordIcon.classList.add("fa-solid")
    recordIcon.classList.add("fa-square")
    recordIcon.style.color = "black"

    micButton.style.backgroundColor = "red"
    micButton.appendChild(recordIcon)
  }
}


function toggleMicrophone() {

  if (micPressed == false) {
    //show button for stopping recording
    log("Mic pressed")
    micPressed = true
    let micButton = qSel("#mic-button")
    micButton.style.display = "none"

    let stopRecordingBtn = qSel("#stop-record-button")
    stopRecordingBtn.style.display = "inline"
  }
  else {
    //show button for recording
    log("Mic unpressed")
    micPressed = false
    let stopRecordingBtn = qSel("#stop-record-button")
    stopRecordingBtn.style.display = "none"

    let micButton = qSel("#mic-button")
    micButton.style.display = "inline"
  }
}
