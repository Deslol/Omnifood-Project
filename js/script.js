import "core-js/stable";
import "regenerator-runtime";
///////////////////////////////////////////////////////////
// Set Current year
///////////////////////////////////////////////////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
///////////////////////////////////////////////////////////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
//Smooth Scrolling Animation
///////////////////////////////////////////////////////////
const mainNavListEl = document.querySelector(".main-nav-list");
const allLinks = document.querySelectorAll("a:link");
const logoEl = document.querySelectorAll(".brand-logo");

mainNavListEl.addEventListener("click", (e) => {
  // console.log(e);
  const link = e.target.closest(".main-nav-link");
  if (!link) return;
  e.preventDefault();

  const href = link.getAttribute("href");
  // console.log(href);
  const sectionEl = document.querySelector(href);
  console.log(sectionEl);
  sectionEl.scrollIntoView({ behavior: "smooth" });

  // Remove nav-open from classList
  headerEl.classList.toggle("nav-open");
});

logoEl.forEach((logo) => {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    // Scroll back to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation
///////////////////////////////////////////////////////////
const bodyEl = document.querySelector("body");
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(!ent.isIntersecting);

    ent.isIntersecting
      ? bodyEl.classList.remove("sticky")
      : bodyEl.classList.add("sticky");
  },
  // if (!ent.isIntersecting) {
  //   headerEl.classList.add("sticky");
  //   sectionHeroEl.classList.add("section-hero-sticky");
  // }
  // if (ent.isIntersecting) {
  //   headerEl.classList.remove("sticky");
  //   sectionHeroEl.classList.remove("section-hero-sticky");
  // }
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
