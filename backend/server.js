import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./router/usersRouter.js";
import routers from "./router/todoRouter.js";

dotenv.config();

const app = express();

let port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/v1/todo/", routers);
app.use("/api/v1/users/", userRouter);

app.listen(port, () => console.log(`listening on port ${port}`));
