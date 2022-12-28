import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import routers from "./router/todoRouter.js";


dotenv.config();

const app = express();
const uri = process.env.MONGO_URI;
let port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/v1/', routers)

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`you are connected to these mongo_uri link: ${uri}`);
  })
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((err) => console.error(err));
