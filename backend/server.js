import express from "express";
import cors from "cors";
import compression from 'compression'
import userRouter from "./router/usersRouter.js";
import routers from "./router/todoRouter.js";
import { env } from "./config/environment.js";
import { RESPONSE401 } from "./config/message.js";

const app = express();

let port = env.port||5000
app.use(cors());
app.use(express.json());
app.use(compression());
app.use("/api/v1/todo/", routers);
app.use("/api/v1/users/", userRouter);
app.get('*', (req, res) => {
    RESPONSE401(res, "PAGE NOT FOUND");
})

app.listen(port, () => console.log(`listening on port ${port}`));
