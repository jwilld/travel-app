import fetch from "node-fetch";

const getPhoto = async (apiKey, location) => {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=?${location}`;
  const result = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
    return result
};

export default getPhoto;
