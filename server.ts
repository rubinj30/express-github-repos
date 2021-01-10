require("dotenv").config();

import express from "express";
import path from "path";
import bodyParser from "body-parser";
import logger from "morgan";
import cookieParser from "cookie-parser";

const app = express(); // initialize the express server

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));

const ReposController = require("./routes/repos");
app.use("/api/repos", ReposController);

// create a test route
app.get("/", (_req: any, res, next) => {
  res.send("Hello world!");
});

// Define the port to run the server. this could either be defined // in the environment variables or directly as shown below
app.listen(process.env.PORT || 8001, () => {
  console.log("server started", process.env.PORT);
});
