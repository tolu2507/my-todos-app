import { Connect, Database } from "../Data/todoDb.js";
import dotenv from "dotenv";
import { RESPONSE201, RESPONSE301, RESPONSE401 } from "../config/message.js";
dotenv.config();

const uri = process.env.MONGO_URI;
const todoUser = new Database(uri);
todoUser.init();

export async function TodoHome(res) {
  try {
    const todos = await todoUser.Read();
    if (todos === null || todos === undefined) {
      return RESPONSE401(res, "no todo available");
    } else {
      return RESPONSE201(res, todos);
    }
  } catch (error) {
    throw error;
  }
}

export async function TodoHomeById(id, res) {
  try {
    const query = { _id: id };
    if (query) {
      const todo = await todoUser.FindOne(query);
      if (todo === null || todo === undefined) {
        return RESPONSE401(res, "no todo available");
      } else {
        return RESPONSE201(res, todo);
      }
    } else {
      return RESPONSE401(res, "Id is invalid");
    }
  } catch (error) {
    throw error;
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
    if (data === null || data === undefined) {
      return RESPONSE401(res, " The Data is null or Undefined!!!!");
    } else {
      return RESPONSE201(res, data);
    }
  } catch (error) {
    throw error;
  }
}

export async function UpdateTodofunc(req, res) {
  try {
    const _id = req.params.id;
    const obj = {
      task: req.body.task,
      time_stated: req.body.time_stated,
      time_finished: req.body.time_finished,
      isDone: req.body.isDone,
      comment: req.body.comment,
    };
    const data = await todoUser.Update(_id, obj);
    if (data === null || data === undefined) {
      return RESPONSE401(res, "Unable to update the data");
    } else {
      return RESPONSE201(res, data);
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
      if (data === null || data === undefined) {
        return RESPONSE401(res, "unable to delete task.");
      } else {
        return RESPONSE301(res);
      }
    }
  } catch (error) {
    throw error;
  }
}

export async function CreateConn(res) {
  const data = await Connect(uri);
  return RESPONSE201(res, data);
}
