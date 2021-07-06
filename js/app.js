/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const list = document.getElementById("navbar__list");

/**r
 * End Global Variables
 * Start Helper Functions
 *
 */

sections.forEach(function (en, index) {
  var lis = document.createElement("li");
  lis.setAttribute("id", "section" + (index + 1));
  var ancor = document.createElement("a");

  var text = document.createTextNode("section " + (index + 1));
  ancor.appendChild(text);
  lis.appendChild(ancor);
  list.appendChild(lis);
});
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

document.addEventListener("scroll", function () {
  sections.forEach(function (section, index) {
    const rect = section.getBoundingClientRect();
    section.classList.remove("your-active-class");
    if (rect.top >= -300 && rect.top <= 300) {
      section.classList.add("your-active-class");
    }
  });
});

// Scroll to anchor ID using scrollTO event
const all_li = list.querySelectorAll("li");
sections.forEach(function (sl) {
  all_li.forEach(function (lli) {
    lli.addEventListener("click", function () {
      if (lli.id == sl.id) {
        sl.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    });
  });
});
// Add class 'active' to section when near top of viewport
onscroll = function () {
  let position = document.documentElement.scrollTop;
  sections.forEach(function (section, index) {
    if (
      position >= section.offsetTop - section.offsetHeight * 0.5 &&
      position <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.5
    ) {
      var curunt = section.attributes.id.value;
      removeAllClassActive();
      addClassActive(curunt);
    }
    if (position <= sections[0].offsetTop - section.offsetHeight * 0.5) {
      removeAllClassActive();
    }
  });
};
var removeAllClassActive = function () {
  all_li.forEach(function (lli) {
    lli.classList.remove("active-class");
  });
};
var addClassActive = function (id) {
  all_li.forEach(function (llli) {
    if (llli.id == id) {
      llli.classList.add("active-class");
    } else {
      llli.classList.remove("active-class");
    }
  });
};
/**
 * End Main Functions
 * Begin Events
 *
 */

