import fetch from "node-fetch";

const renderDiscover = () => {
  const fragment = document.createDocumentFragment();

  let state = {
    date: "",
    location: "",
    image: "",
  };

  const inputs = ["location", "start date", "end date"];

  const form = document.createElement("form");
  form.className = "discover-form";

  for (const title of inputs) {
    let input = document.createElement("input");
    input.setAttribute("placeholder", title);
    input.className = `input ${title}-input`;
    form.appendChild(input);
  }

  let submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerText = "Add Trip";
  form.appendChild(submit);

  fragment.appendChild(form);

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

  // this is for testing, change this to render dynamically
  let tripImage = document.createElement("img");
  tripImage.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=881&q=80"
  );
  tripImage.className = "discover-trip-image";
  fragment.appendChild(tripImage);

  document.querySelector(".content").appendChild(fragment);

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

    // fetch('http://localhost:8080/location',{
    //   method: 'POST',
    //   credentials: 'same-origin',
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({location:'hinesville'})
    // }).catch(e => console.log(e))
  });
};

export { renderDiscover };
