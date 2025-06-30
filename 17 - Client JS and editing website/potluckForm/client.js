
let userData = {name: "", phoneNum: "", allergies: [], activityIdeas: "", favIcecream: ""}

function readData() {
  userData["name"] = qSel("#name-field").value
  userData["phoneNum"] = qSel("#phone-num-field").value
  userData["allergies"] = readAllergies()  
  userData["activityIdeas"] = qSel("#activities-field").value
  userData["favIcecream"] = readIcecream()

  log("User data: " + JSON.stringify(userData))
}


function readAllergies() {
  let allergies = []
  let checkboxes = qSelAll("#allergies-options input[type='checkbox']")
  let allergyLabels = ["Peanuts", "Tree nuts", "Milk", "Eggs", "Other"]
  
  for (let i = 0; i < checkboxes.length - 1; i++) {
    if (checkboxes[i].checked && checkboxes[i].textContent != "Other") {
      allergies.push(allergyLabels[i])
    }
  }

  let otherAllergy = qSel("#other-allergy-field").value

  if (otherAllergy != "") {  
    allergies.push(otherAllergy)
  }

  return allergies
}


function readIcecream() {
  let icecreamDropdown = qSel("#icecream-flavors")
  let favFlavor = icecreamDropdown.options[icecreamDropdown.selectedIndex].value
  let otherFlavor = qSel("#other-icecream-field").value

  if (otherFlavor != "") {
    favFlavor = otherFlavor
  }
  
  return favFlavor
}


document.addEventListener('DOMContentLoaded', function() {
  qSel("#submit-button").addEventListener("click", readData)
})

document.addEventListener('beforeunload', function() {
  log("Goodbye")
})