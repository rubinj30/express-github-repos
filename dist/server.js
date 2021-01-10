"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var app = express_1.default(); // initialize the express server
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.use(morgan_1.default("dev"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "dist")));
var ReposController = require("./routes/repos");
app.use("/api/repos", ReposController);
// create a test route
app.get("/", function (_req, res, next) {
    res.send("Hello world!");
});
// Define the port to run the server. this could either be defined // in the environment variables or directly as shown below
app.listen(process.env.PORT || 8001, function () {
    console.log("server started", process.env.PORT);
});
