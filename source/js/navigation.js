const toggleId = "main-nav__toggle";
const showNavigationClass = "show-main-nav";

var page = document.querySelector(".page");

page.classList.remove("no-js");

document.addEventListener("mouseup", function(e) {
  if (e.target.id === toggleId || e.target.parentElement.id === toggleId) {
    page.classList.toggle(showNavigationClass);
  }
});
