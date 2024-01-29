const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(hotels.json());

const uri = "mondodb://127.0.0.1:27017/Hotels";
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

cosnt HotelSchema = new mongoose.Schema({

}) 
