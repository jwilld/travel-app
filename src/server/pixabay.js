import fetch from "node-fetch";

const getPhoto = async (apiKey, location) => {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=?${location}`;
  await fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

export default getPhoto;
