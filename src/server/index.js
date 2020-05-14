import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

// environment variable dependency setup
import dotenv from "dotenv";
dotenv.config();
const pixabayKey = process.env.PB_KEY

// api call functions
import getPhoto from './pixabay.js';
getPhoto(pixabayKey,'rose')

// server setup
const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req,res) => {
    res.sendFile(path.resolve("src/client/html/index.html"))
})

app.get("/test", (req,res) => {
    res.send('<h1>Test</h1>')
})

const port = 8080;
const listening = () => {
  console.log(`Travel app listening on port ${port}`);
};
app.listen(port, listening);
