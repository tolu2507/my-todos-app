import { todoModel } from "../models/todoModels.js";
import { Connect, Database } from "../Data/todoDb.js";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_URI;
const todoUser = new Database(uri);
todoUser.init();

export async function Home(res) {
  try {
    const todos = await todoUser.Read();
    if (todos !== null || todos !== undefined) {
      return res.status(201).send(todos);
    } else {
      return res.status(401).send({ data: "no todo available" });
    }
  } catch (error) {
    throw error
  }
}

export async function HomeId(id, res) {
  const query = { _id: id };
  const todos = await todoUser.FindOne(query);
  if (todos !== null || todos !== undefined) {
    return res.status(201).send(todos);
  } else {
    return res.status(401).send({ data: "no todo available" });
  }
}

export async function CreateNewTodos(req, res) {
  try {
    const new_todo = {
      task: req.body.task,
      time_stated: req.body.time_stated,
      time_finished: req.body.time_finished,
      isDone: req.body.isDone,
      comment: req.body.comment,
    };
    const data = await todoUser.Create(new_todo);
    if (data !== null || data !== undefined) {
      return res.status(201).send({
        msg: "task created",
        id: data._id,
        task: data.task,
        time_stated: data.time_stated,
        time_finished: data.time_finished,
        isDone: data.isDone,
        comment: data.comment,
      });
    } else {
      res.send(401).send({ msg: " The Data is null or Undefined!!!!" });
    }
  } catch (error) {
    res.send(404).send({ msg: "Unable to create user." });
  }
}

export async function UpdateTodofunc(req, res) {
  try {
    const todoId = {
      _id: req.params.id,
    };
    if (todoId) {
      const data = await todoUser.Update(todoId);
      if (data !== null || data !== undefined) {
        return res
          .status(201)
          .send({ msg: `successfuly updated task${todoId}`, data: data });
      } else {
        res.status(401).send({ msg: `unsuccessful, please retry` });
      }
    } else {
      res.status(401).send({ msg: "could not find task with that id" });
    }
  } catch (error) {
    throw error;
  }
}

export async function DeleteTodoById(req, res) {
  try {
    const id_Deleted = { _id: req.params.id };
    if (id_Deleted) {
      const data = await todoUser.Delete(id_Deleted);
      data !== null || data !== undefined
        ? res.status(201).send({ msg: "successfully deleted task." })
        : res.status(401).send({ msg: "unable to delete task." });
    } else {
      res.status(401).send({
        msg: "wrong id sent, please check the id and make sure its correct.",
      });
    }
  } catch (error) {}
}

export async function CreateConn(res) {
  const data = await Connect(uri);
  res.status(201).send(data);
}
