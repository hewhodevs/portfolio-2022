const navMenuButton = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#menu");


/*
  Toggles visibility of the nav menu for mobile devices:
  setTimeout allows time for the height transition complete
  before we set the nav menu to display: block / none when 
  showing / hiding the nav menu element on mobile devices.
  This is for accessibility, so intended hidden elements dont 
  appear to assistive devices.
*/
navMenuButton.addEventListener('click', () => {
  // Show nav menu
  // wait for the nav menu to be re-added to the DOM
  // (done by removing the hidden class, so that display: none is no longer applied)
  // then remove visuallyhidden class so the now existing element can height transition.
  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden');
    setTimeout(function () {
      navMenu.classList.remove('visuallyhidden');
      navMenu.setAttribute("aria-expanded", true);
    }, 20);
  } else {
    // Hide nav menu
    // transition height to close the nav menu.
    // then on transition end, set display: none with the hidden class.
    navMenu.classList.add('visuallyhidden');    
    navMenu.addEventListener('transitionend', (e) => {
      navMenu.classList.add('hidden');
      navMenu.setAttribute("aria-expanded", false);
    }, {
      capture: false,
      once: true,
      passive: false
    });
  }
}, false);