const express = require("express");
const path = require("path");
const axios = require("axios");
const app = express();
require("dotenv").config();

const apiKey = `username=${process.env.USER_NAME}&api_key=${process.env.API_KEY}`;
console.log(apiKey);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/resource*", (req, res) => {
  axios
    .get(
      `https://clist.by:443/api/v1/json/resource/?name__iregex=${req.query.name__iregex}&${apiKey}`
    )
    .then((response) => {
      // console.log(`statusCode: ${res.statusCode}`);
      // console.log(response);
      res.send(response.data);
    })
    .catch((error) => {
      // console.error(error);
      res.send("Server is 404");
    });
});

app.get("/contest*", (req, res) => {
  axios
    .get(
      `https://clist.by:443/api/v1/json/contest/?resource__id=${req.query.resource__id}&start__gte=${req.query.start__gte}&order_by=${req.query.order_by}&${apiKey}`
    )
    .then((response) => {
      // console.log(req.query, "HIIIIIIIIIIIIIIIIIIIIIIII");
      // console.log(`statusCode: ${res.statusCode}`);
      // console.log(response);
      res.send(response.data);
    })
    .catch((error) => {
      // console.error(error);
      res.send("Server is 404");
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
