const renderDiscover = () => {
  const fragment = document.createDocumentFragment();

  let state = {
    date: "",
    location: "",
    image: "",
  };

  const inputs = ["date", "location"];

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

  // this is for testing, change this to render dynamically
  let tripImage = document.createElement("img");
  tripImage.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2013/11/13/12/27/hawaii-209956_1280.jpg"
  );
  tripImage.className = "discover-trip-image";
  fragment.appendChild(tripImage);

  document.querySelector(".content-container").appendChild(fragment);
};

export { renderDiscover };
