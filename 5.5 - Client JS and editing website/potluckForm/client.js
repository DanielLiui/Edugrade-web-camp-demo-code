

document.addEventListener('DOMContentLoaded', function() {
  qSel("#submit-button").addEventListener("click", readUserData)
})


let userData = {name: "", phoneNum: "", allergies: [], activityIdeas: "", favIcecream: ""}

function readUserData() {
  userData.name = qSel("#name-field").value
  userData.phoneNum = qSel("#phone-num-field").value
  userData.activityIdeas = qSel("#activities-field").value
  userData.allergies = readAllergies()
  userData.favIcecream = readIcecream()
  
  log("User Data:", userData)
}


function readAllergies() {
  let checkboxes = document.querySelectorAll("#allergies-options input[type='checkbox']")
  let allergyLabels = ["Peanuts", "Tree nuts", "Milk", "Eggs", "Other"]
  let allergies = []
  
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      allergies.push(allergyLabels[i])
    }
  }
  
  let otherAllergy = qSel("#other-allergy-field").value
  if (otherAllergy != "") allergies.push(otherAllergy)
  
  return allergies
}


function readIcecream() {
  let favIcecream = qSel("#icecream-flavors").value
  let otherIcecream = qSel("#other-icecream-field").value

  if (otherIcecream != "") favIcecream = otherIcecream
  return favIcecream
}




