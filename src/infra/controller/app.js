import makeCallback from '../express-callback'
import { getAllUsers } from ".";


const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();


//body parser middleware to handle raw JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoot = process.env.DM_API_ROOT || ""

app.use((_, res, next) => {
  res.set({ Tk: '!' })
  next()
})
app.get(`${apiRoot}/allUsers`, makeCallback(getAllUsers))

const server = app.listen(process.env.PORT, ()=>{
  console.log(`Server running on port: ${process.env.PORT}`);
});

app.use(async (req, res) => {
  res.status(404).send("Unavailable route");
})

module.exports = app;