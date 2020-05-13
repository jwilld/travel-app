const express = require("express");

const app = express();

const port = 8000;
const listening = () => {
  console.log(`Travel app listening on port ${port}`);
};
app.listen(port, listening);
