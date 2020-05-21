import fetch from "node-fetch";
import regeneratorRuntime from "regenerator-runtime";

const postReq = async (object, route) => {
  const result = await fetch(`http://localhost:8080/${route}`, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => console.log(e));
  console.log(result)
};

const getReq = async (route) => {
  const result = await fetch(`http://localhost:8080/${route}`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
  return result;
};



export { getReq, postReq};
