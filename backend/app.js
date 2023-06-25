const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();


app.use(express.json());

//CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that restricts web pages from making requests to a different domain than the one that served the web pag
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

const tiktok = require("./routes/tiktokRoutes");
app.use("/api/tiktok/V1", tiktok);


module.exports = app;