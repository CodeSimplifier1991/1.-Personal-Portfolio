// Getting all the elements with defined class name (collapsible)
const collapsible = document.querySelectorAll(".collapsible");

/*
For each returned element with the class of 'collapsible', on click event
add the 'collapsible--expand' class if doesn't exist,
remove it if exist
*/
collapsible.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});
