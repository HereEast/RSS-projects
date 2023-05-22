export { showHint };

//
// SHOW HINT
function showHint(message) {
  const hintElement = `
    <div class="hint">
      <span class="hint__message">${message}</span>
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", hintElement);

  const hintId = setTimeout(() => {
    const hint = document.querySelector(".hint");
    hint.classList.add("hint--show");

    setTimeout(() => {
      hint.classList.remove("hint--show");
      hint.remove();

      clearTimeout(hintId);
    }, 1500);
  });
}
