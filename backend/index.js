const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet")

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database connected"))
.catch(err=>console.log(err))

app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get("/", (req, res)=>{
  res.send("hi")
})

app.listen(8800, ()=>{
  console.log("Port is running on 8800")
})