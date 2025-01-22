// Connecting our website with mongo db

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json())

// MongoDB connection

const MongoURL = "mongodb://127.0.0.1:27017/"

mongoose.connect(MongoURL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.on("connected" , () => console.log(('MongoDB Connected! ✅')))
db.on("error" , () => console.log("MongoDB Not Connected") )

// Schema and model setup 

const userSchema = new mongoose.Schema({
    userName: String,
    Email: String,
    age: Boolean,
})

const User = mongoose.model("User" , userSchema)

app.post("/addUser" , async (req , res) => {
    try {
        const {userName , Email , age} = req.body
        const newUser = new User({ userName , Email , age })
        await newUser.save()
        res.status(201).send( {message: "newUser Added Successfully" , user: newUser })
    }

    catch {
        res.status(500).send({message: "Failed to add user" , error : error.message})
    }
})