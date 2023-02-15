/* selection by input is horrible I've `cause there */
const checkbox = document.getElementById('toggle');
const htmlElement = document.documentElement;

/* add remove classes */
const smoothTrans = () => {
  htmlElement.classList.add("transition");

  window.setTimeout(() => {
    htmlElement.classList.remove("transition");
  }, 1000);
};

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    smoothTrans();
    htmlElement.setAttribute("data-theme", "dark");
  } else {
    smoothTrans();
    htmlElement.setAttribute("data-theme", "light");
  }
});
