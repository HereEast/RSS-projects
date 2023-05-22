export { highlightStart, updateButtonsStyle };

//
// UPDATE BUTTONS STYLE
function updateButtonsStyle(button, buttonsSize) {
  buttonsSize.forEach((button) => {
    button.classList.remove("button__size--selected");
  });

  button.classList.add("button__size--selected");
}

//
// HIGHLIGHT START
function highlightStart() {
  const element = document.querySelector(".main__info");

  element.classList.add("main__info--highlighted");

  const timerId = setTimeout(() => {
    element.classList.remove("main__info--highlighted");
    clearTimeout(timerId);
  }, 800);
}
