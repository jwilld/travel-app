import fetch from "node-fetch";

const getWeather = async (key, city, start, end) => {
  // city/state format is "Raleigh,NC"
  // the start and end date format is YYYY/MM/DD
  const url = `https://api.weatherbit.io/v2.0/current/api/?key=${key}&city=${city}&start_date=${start}&end_date=${end}`;
  await fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export default getWeather;
