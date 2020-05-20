import { renderHome } from "./js/Home.js";
import { renderAbout } from "./js/About.js";
import { renderDiscover } from "./js/Discover";
import { renderTrips } from "./js/Trips.js";
import "./styles/style.scss";

renderHome();
const nav = document.querySelector("nav");
nav.addEventListener("click", (event) => {
  const content = document.querySelector(".content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  // window.history.pushState('','',`/${event.target.innerText}`)
  const page = event.target.innerText;
  switch (page) {
    case "Home":
      renderHome();
      break;
    case "Discover":
      renderDiscover();
      break;
    case "About":
      renderAbout();
      break;
    case "Trips":
      renderTrips();
      break;
    default:
      renderHome();
      break;
  }
});
export { renderHome, renderAbout, renderDiscover };
