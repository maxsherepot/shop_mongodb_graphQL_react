const express = require("express")
const mongoose = require("mongoose")


const MONGO_DB_URI = "mongodb+srv://dominator5530:dominator5530@node-mongo-cluster.kze0g.mongodb.net/"
const app = express()


mongoose.connect(MONGO_DB_URI)
    .then(app.listen(8000))
    .catch(err => console.log(err))