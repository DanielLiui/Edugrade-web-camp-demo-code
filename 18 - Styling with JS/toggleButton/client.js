
let micPressed = false

document.addEventListener('DOMContentLoaded', function() {
  qSel("#mic-button").addEventListener("click", toggleMicrophone)
  qSel("#stop-record-button").addEventListener("click", toggleMicrophone)
})

/*
function toggleMicrophoneSelect() {
  let micButton = qSel("#mic-button")
  micButton.removeChild("i")
  
  if (micButton.classList.contains("inactive")) {
    //show record button
    let recordIcon = document.createElement("i")
    recordIcon.classList.add("fa-solid fa-square")
    recordIcon.style.color = "white"

    micButton.style.backgroundColor = "red"
    micButton.appendChild(recordIcon)
  }
  else {  
    //show microphone button
    let micIcon = document.createElement("i")
    micIcon.classList.add("fa-solid fa-microphone")
    micIcon.style.color = "black"

    micButton.style.backgroundColor = "white"
    micButton.appendChild(recordIcon)
  }
}
*/


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
