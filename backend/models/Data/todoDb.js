import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { todoModel } from "../todoModels.js";

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
  async Create(new_todo) {
    const to_do = new todoModel(new_todo);
    const newTodo = await to_do.save();
    if (newTodo) return newTodo;
  }
  async Update(_id, obj) {
    if (_id) {
      const updateTodo = await todoModel.findByIdAndUpdate(_id);
      if (updateTodo) {
        (updateTodo.task = obj.task),
          (updateTodo.isDone = obj.isDone),
          (updateTodo.time_stated = obj.time_stated),
          (updateTodo.time_finished = obj.time_finished),
          (updateTodo.comment = obj.comment);

        const newTsk = await updateTodo.save();
        if (newTsk) {
          return newTsk;
        } else {
          return { msg: "unable to update task, please try again" };
        }
      }
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
