import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

import getPhoto from "./pixabay.js";
import getWeather from "./weatherbit.js";

// environment variable dependency setup
dotenv.config();
const pixabayKey = process.env.PB_KEY;
const weatherbitKey = process.env.WB_KEY;

// api call functions
// getPhoto(pixabayKey, "aruba");
// getWeather(weatherbitKey, "Hinesville,GA", "2020/05/16", "2020/05/17");

// server setup
const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve("src/client/html/index.html"));
});

app.get("/test", (req, res) => {
  res.send("<h1>Test</h1>");
});

const port = 8080;
const listening = () => {
  console.log(`Travel app listening on port ${port}`);
};
app.listen(port, listening);
