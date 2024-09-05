import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import 'dotenv/config';
const PORT = 5000;

const DB_URL = process.env.DB_URL;
const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use('/api', router);


async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
