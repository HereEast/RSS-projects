export { toggleMode, setMode };

// TOGGLE
function toggleMode() {
  const { body } = document;
  
  if(body.classList.contains("mode--light")) {
    body.classList.remove("mode--light");

    localStorage.setItem("mode", "mode--dark");
  } else {
    body.classList.add("mode--light");

    localStorage.setItem("mode", "mode--light");
  }
}

// SET
function setMode() {
  const mode = localStorage.getItem("mode") || "mode--dark";
  document.body.classList.add(mode);
}
