import fetch from "node-fetch";
import regeneratorRuntime from "regenerator-runtime";

const postReq = async (object, route) => {
  const result = await fetch(`http://localhost:8080/${route}`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => console.log(e));
  return result
};

const addLocation = () => {
  fetch("http://localhost:8080/location", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ location: "hinesville" }),
  }).catch((e) => console.log(e));
};

// Pixabay photo, this is for testing, change this to render dynamically
const getImage = () => {
  let tripImage = document.createElement("img");
  tripImage.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=881&q=80"
  );
  tripImage.className = "discover-trip-image";
  fragment.appendChild(tripImage);

  document.querySelector(".content").appendChild(fragment);
};

export { postReq, addLocation, getImage };
