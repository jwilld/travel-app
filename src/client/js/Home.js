const renderHome = () => {
  const fragment = document.createDocumentFragment();
  const landingInfo = {
    header: "Travel",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim sodales ut eu sem integer.",
    sideImage:
      "https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=881&q=80",
  };
  // create text elements and attatch to div
  let textContainer = document.createElement("div");
  textContainer.className = "travel-landing-text";

  let textHeader = document.createElement("h1");
  textHeader.innerText = landingInfo.header;
  textContainer.appendChild(textHeader);

  let textDescription = document.createElement("p");
  textDescription.innerText = landingInfo.description;
  textContainer.appendChild(textDescription);
  // append text to fragment
  fragment.appendChild(textContainer);

  let imgElement = document.createElement("img");
  imgElement.className = "travel-intro-image";
  imgElement.setAttribute("src", landingInfo.sideImage);
  //append image to fragment
  fragment.appendChild(imgElement);

  document.querySelector(".content-container").appendChild(fragment);
};

export { renderHome };
