import { getReq } from "./ServerReq";

const renderTrips = async () => {
  const state = {
    trips: "",
  };
  state.trips = await getReq("trips");

  const fragment = document.createDocumentFragment();
  
  for (let trip of state.trips) {
    const tripBox = document.createElement('div');
    tripBox.className = 'trip-box'
    
    const leftSection = document.createElement('div');
    leftSection.className = 'left-section'

    const locationText = document.createElement('p');
    locationText.className = 'location-text'

    const dateText = document.createElement('span');
    dateText.className = 'date-text'
    
    // set text 
    locationText.innerText = trip.location
    dateText.innerText = `${trip.startdate} - ${trip.enddate}`
    // append elements
    leftSection.appendChild(locationText)
    leftSection.appendChild(dateText)

    tripBox.appendChild(leftSection)
    
    fragment.appendChild(tripBox)
  }
  document.querySelector(".content").appendChild(fragment);
  console.log(state);
};

export { renderTrips };
