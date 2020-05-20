import fetch from "node-fetch";

// add trip to server
const addTrip = (object) => {
  fetch("http://localhost:8080/trip", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  }).catch((e) => console.log(e));
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

const createForm = () => {
  const inputs = ["location", "start date", "end date"];
  const form = document.createElement("form");
  form.className = "discover-form";

  //iterate over inputs, creating elements and add input event to update state
  for (const title of inputs) {
    let input = document.createElement("input");
    input.setAttribute("placeholder", title);
    //creates classname without spaces
    const regexTitle = title.replace(/\s+/g, "");
    input.className = `input ${regexTitle}-input`;
    form.appendChild(input);
    input.addEventListener("input", () => {
      state[regexTitle] = input.value;
      console.log(state);
    });
  }
  let submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerText = "Add Trip";
  form.appendChild(submit);
  // add form to fragment
  fragment.appendChild(form);
};

// function to display temoperatures
const renderTemp = () => {
  const temps = [72];
  let tempContainer = document.createElement("div");
  tempContainer.className = "temp-container";

  for (const temp of temps) {
    let tempBox = document.createElement("div");
    tempBox.className = "temp-box";

    let tempText = document.createElement("p");
    tempText.innerText = temp;

    tempBox.appendChild(tempText);
    tempContainer.appendChild(tempBox);
  }
};

const createLocationDropDown = () => {
    // add functions to inputs
    const location = document.querySelector(".location-input");
    const searchList = document.createElement("ul");
    searchList.className = "discover-search-list";
  
    location.after(searchList);
    const locations = ["hinesville", "huntsville", "hines"];
    location.addEventListener("input", (e) => {
      state.location = e.target.value;
      while (searchList.firstChild) {
        searchList.removeChild(searchList.firstChild);
      }
      for (let loc of locations) {
        if (loc.includes(state.location) && state.location !== "") {
          let listItem = document.createElement("li");
          listItem.innerText = loc;
          searchList.appendChild(listItem);
        }
      }
      // request usesd to verify location and make suggestions to user
    });
}

const submitListener = () => {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const trip = {
      location: state.location,
      startDate: state.startdate,
      endDate: state.enddate,
    };
    addTrip(trip);
  });
}



// create Discover page
const renderDiscover = () => {
  const fragment = document.createDocumentFragment();

  let state = {
    enddate: "",
    startdate: "",
    location: "",
    image: "",
  };

  createForm()
  getImage()
  createLocationDropDown()
  submitListener()





};

export { renderDiscover };
