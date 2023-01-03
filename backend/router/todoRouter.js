import { Router } from "express";
import { CREATE, DELETE, HOME, HOMEBYID, NEWHOME, UPDATE } from "../config/routesConstants.js";
import {
  CreateTodos,
  DeleteTodo,
  GetTodos,
  HomeById,
  NewDb,
  UpdateTodos,
} from "../controllers/todoRouter.js";

const routers = Router();

routers.route(HOME).get(GetTodos);

routers.route(HOMEBYID).get(HomeById);

routers.route(CREATE).post(CreateTodos);

routers.route(UPDATE).put(UpdateTodos);

routers.route(NEWHOME).get(NewDb);

routers.route(DELETE).delete(DeleteTodo);

export default routers;
