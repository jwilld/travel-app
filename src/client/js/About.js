const renderAbout = () => {
    const fragment = document.createDocumentFragment();
  
    const aboutInfo = {
      text: "Site by Jerry Davidson",
    };
  
    const aboutContainer = document.createElement("div");
    aboutContainer.className = "about-text-container";
  
    const aboutText = document.createElement("p");
    aboutText.innerText = aboutInfo.text;
    aboutContainer.appendChild(aboutText);
  
    fragment.appendChild(aboutContainer);
    document.querySelector(".content-container").appendChild(fragment);
  };
  
  export { renderAbout };
  