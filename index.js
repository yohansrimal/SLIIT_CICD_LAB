const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Yohan!");
});

app.listen(port, () => {
  console.log(`Application is listening on port ${port}`);
});
