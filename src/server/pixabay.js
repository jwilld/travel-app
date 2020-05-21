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
    return result.hits.length === 0 ? {hits:[{fullHDURL:'https://cdn.pixabay.com/photo/2014/07/01/12/35/taxi-cab-381233_1280.jpg'}]}
    :
    result
};

export default getPhoto;
