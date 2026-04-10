window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    if (intro) {
      intro.style.display = "none";
    }
  }, 6200);
});