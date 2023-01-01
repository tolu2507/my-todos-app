import { CreateConn, CreateNewTodos, DeleteTodoById, Home, HomeId, UpdateTodofunc } from "../services/dataService.js";

export const GetTodos = async (req, res) => {
  try {
    Home(res);
  } catch (error) {
    res.status(404).send({ data: error });
  }
};

export const HomeById = async (req, res) => {
  try {
    const id = req.params.id;
    HomeId(id, res);
  } catch (error) {
    res.status(404).send({ data: error });
  }
};

export const CreateTodos = async (req, res) => {
  try {
    CreateNewTodos(req, res)
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: error });
  }
};

export const UpdateTodos = async (req, res) => {
  try {
    UpdateTodofunc(req, res)
  } catch (error) {
    res.status(404).send({ msg: error });
  }
};

export const NewDb = async (req, res) => {
  try {
    CreateConn(res);
  } catch (error) {
    res.status(404).send({ data: error });
  }
};

export const DeleteTodo = async (req, res) => {
  try {
      DeleteTodoById(req, res);
  } catch (error) {
    res.status(404).send({ msg: error });
  }
};