console.log("✅ Dark and light mode");

function toggleMode() {
  const { body } = document;
  body.classList.toggle("mode--light");
}

export { toggleMode };