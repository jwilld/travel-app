import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

import getPhoto from "./pixabay.js";
import getWeather from "./weatherbit.js";
import getGeo from "./geonames.js";

// environment variable setup
dotenv.config();
const pixabayKey = process.env.PB_KEY;
const weatherbitKey = process.env.WB_KEY;
const geonamesKey = process.env.GEO_KEY;

const db = {
  trips: [
    {
      location: "Miami, Fl",
      startdate: "05/20/2020",
      enddate: "06/10/2020",
      averageTemp: "75.02°F",
      image:
        "https://pixabay.com/get/54e1d4444953ac14f6d1867dda79367a143bdee551516c4870267bd4964acc5cb8_1920.jpg",
    },
  ],
};
// server setup
const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/location", async (req, res) => {
  const location = req.body.location;
  const result = await getGeo(geonamesKey, location);
  res.send(result);
});

app.post("/trip", async (req, res) => {
  const trip = req.body;

  // add average weather to db
  const resultWeather = await getWeather(weatherbitKey, req.body.location);
  console.log(resultWeather);

  // add pixabay image to db
  // pixababy location is a stripped string containing only the city
  const pixabayLocation = trip.location.substring(
    0,
    trip.location.indexOf(",")
  );
  console.log(pixabayLocation);
  const pixabayReq = await getPhoto(pixabayKey, pixabayLocation);
  trip.image = pixabayReq.hits[0].fullHDURL;

  // add geo name to db
  const geoLocation = await getGeo(geonamesKey, pixabayLocation);
  trip.location = `${geoLocation.postalCodes[0].placeName}, ${geoLocation.postalCodes[0]["ISO3166-2"]}`;

  trip.averageTemp = `${Math.round(resultWeather)}°F`;
  db.trips.push(trip);
  console.log(db.trips);
});

app.get("/trips", (req, res) => {
  console.log(db.trips);
  res.send(db.trips);
});

app.post("/pixabay", async (req, res) => {
  const result = await getPhoto(pixabayKey, req.body.location);
  res.send(result);
});

const port = 8080;
const listening = () => {
  console.log(`Travel app listening on port ${port}`);
};
app.listen(port, listening);

export { port, app };
