import fetch from "node-fetch";

const getGeo = async (key, location) => {
  // location is the city (US onyl for now)
  const url = `http://api.geonames.org/postalCodeSearch?username=${key}&placename=${location}&type=json`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
  return result
};

export default getGeo;
