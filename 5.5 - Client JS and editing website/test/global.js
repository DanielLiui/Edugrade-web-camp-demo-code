// Global helper functions
function qSel(selector) {
  return document.querySelector(selector);
}

function qSelAll(selector) {
  return document.querySelectorAll(selector);
}

function log(message, data = null) {
  if (data) {
    console.log(message, data);
  } else {
    console.log(message);
  }
}
