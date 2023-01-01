import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { todoModel } from "../models/todoModels.js";

export class Database {
  constructor(db) {
    this.db = db;
  }
  init() {
    mongoose
      .connect(this.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`you are connected to these mongo_uri link: ${this.db}`);
      })
      .catch((err) => console.error(err));
  }

  Read() {
    const data = todoModel.find({});
    if (data) return data;
  }
  FindOne(query) {
    const data = todoModel.findOne(query);
    if (data) return data;
  }
  Create(new_todo) {
    const to_do = new todoModel(new_todo);
    const newTodo = to_do.save();
    if (newTodo) return newTodo;
  }
  Update(todoId) {
    const task = todoModel.findByIdAndUpdate(todoId);
    if (task) {
      task.task = req.body.task;
      task.time_stated = req.body.time_stated;
      task.time_finished = req.body.time_finished;
      task.isDone = req.body.isDone;
      task.comment = req.body.comment;

      const newTask = task.save();
      if (newTask) return newTask;
    }
  }
  Delete(deletedId) {
    const todo_deleted = todoModel.findByIdAndDelete(deletedId);
    const suc_del = todo_deleted.deleteOne(todo_deleted);
    if (suc_del) return suc_del;
  }
}

export async function Connect(url) {
  try {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("customers").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
        return result;
      });
    });
  } catch (error) {
    throw error;
  }
}
