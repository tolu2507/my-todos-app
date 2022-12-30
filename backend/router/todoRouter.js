import express from "express";
import { todoModel } from "../models/todoModels.js";

const routers = express.Router();

routers.route("/home").get(async (req, res) => {
  try {
    const todos = await todoModel.find({});
    if (todos !== null || todos !== undefined) {
      res.status(201).send(todos);
    } else {
      res.status(401).send({ data: "no todo available" });
    }
  } catch (error) {
    res.status(404).send({ data: error });
  }
});

routers.route("/home/:id").get(async (req, res) => {
  try {
    const query = { _id: req.params.id };
    const todos = await todoModel.findOne(query);
    if (todos !== null || todos !== undefined) {
      res.status(201).send(todos);
    } else {
      res.status(401).send({ data: "no todo available" });
    }
  } catch (error) {
    res.status(404).send({ data: error });
  }
});

routers.route("/todos").post(async (req, res) => {
  try {
    const to_do = new todoModel({
      task: req.body.task,
      time_stated: req.body.time_stated,
      time_finished: req.body.time_finished,
      isDone: req.body.isDone,
      comment: req.body.comment,
    });
    const newTodo = await to_do.save();
    if (newTodo) {
      res.status(201).send({
        msg: "task created",
        id: to_do._id,
        task: to_do.task,
        time_stated: to_do.time_stated,
        time_finished: to_do.time_finished,
        isDone: to_do.isDone,
        comment: to_do.comment,
      });
    } else {
      res.status(401).send("couldnt find task");
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: "unable to get task" });
  }
});

routers.route("/update/:id").put(async (req, res) => {
  try {
    const todoId = { _id: req.params.id };
    if (todoId) {
      const task = await todoModel.findByIdAndUpdate(todoId);
      if (task) {
        task.task = req.body.task;
        task.time_stated = req.body.time_stated;
        task.time_finished = req.body.time_finished;
        task.isDone = req.body.isDone;
        task.comment = req.body.comment;

        const newTask = await task.save();
        if (newTask) {
          res
            .status(201)
            .send({ msg: `successfuly updated task${todoId}`, data: newTask });
        }
      } else {
        res.status(401).send({ msg: "could not find task" });
      }
    } else {
      res.status(401).send({ msg: "could not find task with that id" });
    }
  } catch (error) {
    res.status(404).send({ msg: "could not update the task" });
  }
});

routers.route("/delete/:id").delete(async (req, res) => {
  try {
    const id_Deleted = { _id: req.params.id };
    if (id_Deleted) {
      const todo_deleted = todoModel.findByIdAndDelete(id_Deleted);

      if (todo_deleted) {
        const suc_del = await todo_deleted.deleteOne(todo_deleted);
        suc_del
          ? res.status(201).send({ msg: "successfully deleted task." })
          : res.status(401).send({ msg: "unable to delete task." });
      } else {
        res.status(401).send({ msg: "unable to find task to be deleted." });
      }
    } else {
      res
        .status(401)
        .send({
          msg: "wrong id sent, please check the id and make sure its correct.",
        });
    }
  } catch (error) {
      res.status(404).send({ msg: error });
  }
});

export default routers;
