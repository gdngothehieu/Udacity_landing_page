const sections = document.querySelectorAll("section");

// This function will run at start in order to render the navigation bar to the template
const initiateNavBar = () => {
  let listUI = "";

  const navbar = document.getElementById("navbar__list");

  for (let i = 0; i < sections.length; i++) {
    const sectionID = sections[i].id;
    const secNav = sections[i].dataset.nav;

    listUI += `<li class="menu__link" id=${
      `menu__link` + sectionID
    }><a >${secNav}</a></li>`;
  }

  navbar.innerHTML = listUI;
  for (let i = 0; i < sections.length; i++) {
    const handleNavBarOnClick = (event) => {
      event.preventDefault();
      document
        .getElementById(`${sections[i].id}`)
        .scrollIntoView({ behavior: "smooth" });
    };
    document
      .getElementById(`menu__link${sections[i].id}`)
      .addEventListener("click", handleNavBarOnClick);
  }
};
// This function will activate rendering highlighting the section and the navigation tab of that section when the section is being viewed
const activateSection = () => {
  for (let i = 0; i < sections.length; i++) {
    const navbarLinkId = document.getElementById(`menu__link${sections[i].id}`);

    navbarLinkId.classList.remove("your-active-class");
    navbarLinkId.style.cssText = "background-color: black";
    sections[i].classList.remove("your-active-class");
    sections[i].style.cssText =
      "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
    if (
      Math.floor(sections[i].getBoundingClientRect().top) <= 125 &&
      Math.floor(sections[i].getBoundingClientRect().top) >= -125
    ) {
      navbarLinkId.classList.add("your-active-class");
      navbarLinkId.style.cssText = "background-color: white;";
      sections[i].classList.add("your-active-class");
      sections[i].style.cssText = "background-color: black;";
    }
  }
};
initiateNavBar();
window.addEventListener("scroll", activateSection);
