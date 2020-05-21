import { getReq, postReq } from "./ServerReq";

const renderTrips = async () => {
  const state = {
    trips: "",
  };
  state.trips = await getReq("trips");

  const fragment = document.createDocumentFragment();
  const tripsContainer = document.createElement("div");
  tripsContainer.className = "trips-container";

  for (let trip of state.trips) {
    const tripBox = document.createElement("div");
    tripBox.className = "trip-box";

    const leftSection = document.createElement("div");
    leftSection.className = "left-section";

    const locationText = document.createElement("p");
    locationText.className = "location-text";

    const dateText = document.createElement("span");
    dateText.className = "date-text";

    // set text
    locationText.innerText = trip.location;
    dateText.innerText = `${trip.startdate} - ${trip.enddate}`;
    // append elements
    leftSection.appendChild(locationText);
    leftSection.appendChild(dateText);
    tripBox.appendChild(leftSection);

    const middleSection = document.createElement("div");
    const tempText = document.createElement("span");
    tempText.className = 'temp-text'
    tempText.innerText = "7 day average";
    middleSection.className = "middle-section";
    const temp = document.createElement("p");
    temp.innerText = trip.averageTemp;
    middleSection.appendChild(temp);
    middleSection.appendChild(tempText)
    tripBox.appendChild(middleSection);

    const rightSection = document.createElement("div");
    rightSection.className = "right-section";
    const image = document.createElement("img");
    image.className = "pixabay-img";
    image.setAttribute("src", trip.image);

    rightSection.appendChild(image);
    tripBox.appendChild(rightSection);

    tripsContainer.appendChild(tripBox);
  }

  fragment.appendChild(tripsContainer);
  document.querySelector(".content").appendChild(fragment);
};

export { renderTrips };
