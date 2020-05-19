const renderDiscover = () => {
  const fragment = document.createDocumentFragment();

  let state = {
    date: "",
    location: "",
    image: "",
  };

  const inputs = ["start date","end date", "location"];

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
    "https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=881&q=80"
  );
  tripImage.className = "discover-trip-image";
  fragment.appendChild(tripImage);

  document.querySelector(".content").appendChild(fragment);
};

export { renderDiscover };
