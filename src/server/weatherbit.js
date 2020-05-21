import fetch from "node-fetch";

const getWeather = async (key, city, days = 7) => {
  const average = (accumulator, currentTemp) => (accumulator + currentTemp)
  // city/state format is "Raleigh,NC"
  // the start and end date format is YYYY/MM/DD
  const url = `https://api.weatherbit.io/v2.0/forecast/daily/api/?key=${key}&city=${city}&units=I&days=${days}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
  const temps = result.data.map(weather => weather.temp)
  const averageTemps = temps.reduce(average)/temps.length
  return averageTemps
};

export default getWeather;
