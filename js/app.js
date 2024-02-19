// Get the first item with class of '.main-content'
const body = document.querySelector(".main-content"); // allSections

// Return all elements with class of 'section'
const sections = document.querySelectorAll(".section");

// Get all elements with class of 'controls' and 'control'
const controls = document.querySelectorAll(".controls"); // sectBtns
const control = document.querySelectorAll(".control"); // sectBtn

// START - Change the state of the active-btn class
function PageTransitions() {
  // Define the length of all items with class of 'control'
  const howManyControlClass = control.length;

  // START - Loop through all control classes to find the control with class of 'active-btn'
  for (let i = 0; i < howManyControlClass; i++) {
    control[i].addEventListener("click", function () {
      // Get all the items with class of 'active-btn'
      let currentBtn = document.querySelectorAll(".active-btn");

      // remove the 'active-btn' class from the first found item
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );

      // Add the 'active-btn' class to the clicked icon
      this.className += " active-btn";
    });
  }
  // END - Loop through all control classes to find the control with class of 'active-btn'

  // START - Get all the items id within the 'body' element
  body.addEventListener("click", (e) => {
    // Get the ID of selected items whitin the body element
    const targetSelectedItemID = e.target.dataset.id;

    // If the selected item (ID) has the class of 'active' remove it
    if (targetSelectedItemID) {
      controls.forEach((activeBtn) => {
        activeBtn.classList.remove("active");
      });

      // Add the 'active' class to the clicked button
      e.target.classList.add("active");

      // Also hide all other sections with no 'active' class
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      // Get the targeted element ID which has been clicked, & make it active
      const activeElement = document.getElementById(targetSelectedItemID);
      activeElement.classList.add("active");
    }
  });
  // END - Get all the items id within the 'body' element

  // START - Handles the toggle between dark/light theme

  // Get the first html element with class of '.themeBtn'
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", () => {
    let element = document.body;

    element.classList.toggle("light-mode");
  });
  // END - Handles the toggle between dark/light theme
}

PageTransitions();
// END - Change the state of the active-btn class
