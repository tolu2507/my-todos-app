import express from "express";
import { CreateTodos, DeleteTodo, GetTodos, HomeById, NewDb, UpdateTodos } from "../controllers/todoRouter.js";
import { todoModel } from "../models/todoModels.js";

const routers = express.Router();

routers.route("/home").get(GetTodos);

routers.route("/home/:id").get(HomeById);

routers.route("/todos").post(CreateTodos);

routers.route("/update/:id").put(UpdateTodos);

routers.route("/moan").get(NewDb)

routers.route("/delete/:id").delete(DeleteTodo);



export default routers;
