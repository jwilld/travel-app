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
  trips:[],
}

// api call functions
// getPhoto(pixabayKey, "aruba");
// getWeather(weatherbitKey, "Hinesville,GA", "2020/05/16", "2020/05/17");
// getGeo(geonamesKey,'hinesville')

// server setup
const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/location', async (req,res) => {
  const location = req.body.location
  const result = await getGeo(geonamesKey,location)
  res.send(result)
})

app.post('/trip', (req,res) => {
  const trip = req.body
  console.log(trip)
  db.trips.push(trip)
  console.log(db.trips)
})
app.get("/test", (req, res) => {
  res.send("<h1>Test</h1>");
});

app.get('/home',(req,res) => {
})


const port = 8080;
const listening = () => {
  console.log(`Travel app listening on port ${port}`);
};
app.listen(port, listening);

