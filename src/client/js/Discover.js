import { postReq, addLocation, getImage } from "./ServerReq";
// create Discover page
const renderDiscover = () => {
  const fragment = document.createDocumentFragment();

  let state = {
    enddate: "",
    startdate: "",
    location: "",
    image: "",
  };

  const valid = (className) => {
    const element = document.querySelector(`.${className}-input`);
    element.classList.add("valid");
  };
  const invalid = (className) => {
    const element = document.querySelector(`.${className}-input`);
    element.classList.add("invalid");
  };

  // create form
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
    //  use switch case for regex
    input.addEventListener("input", () => {
      switch (title) {
        case "location":
          let regLocation = /([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/;
          regLocation.test(input.value)
            ? (state[regexTitle] = input.value) && valid(title)
            : 
            invalid(title);
          break;
        default:
          let regDate = /^\d{2}\/\d{2}\/\d{4}$/;
          regDate.test(input.value)
            ? (state[regexTitle] = input.value) && valid(regexTitle)
            : 
            invalid(regexTitle);
            break;
      }
      console.log(state);
    });
  }
  let submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.innerText = "Add Trip";

  // add submit listener
  const empty = "";
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const trip = {
      location: state.location,
      startdate: state.startdate,
      enddate: state.enddate,
    };
    if (
      state.location !== empty &&
      state.startdate !== empty &&
      state.enddate !== empty
    ) {
      postReq(trip, "trip");
      document.querySelector('.discover-form').reset()
      state.location =  ''
      state.startdate = ''
      state.enddate = ''
      alert('trip saved')
    }
    else{
      alert('some information is missing or incorrect')
    }
  });

  form.appendChild(submit);
  fragment.appendChild(form);

  // render temp
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
  // add functions to inputs
  document.querySelector(".content").appendChild(fragment);
};

export { renderDiscover };
