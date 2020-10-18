const functions = require("firebase-functions");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./router/rutas.js"));

exports.app = functions.https.onRequest(app);
