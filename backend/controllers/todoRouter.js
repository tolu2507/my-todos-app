import {
  CreateConn,
  CreateNewTodos,
  DeleteTodoById,
  TodoHome,
  TodoHomeById,
  UpdateTodofunc,
} from "../services/dataService.js";

export const GetTodos = async (req, res) => {
  TodoHome(res);
};

export const HomeById = async (req, res) => {
  const id = req.params.id;
  TodoHomeById(id, res);
};

export const CreateTodos = async (req, res) => {
  CreateNewTodos(req, res);
};

export const UpdateTodos = async (req, res) => {
  UpdateTodofunc(req, res);
};

export const NewDb = async (req, res) => {
  CreateConn(res);
};

export const DeleteTodo = async (req, res) => {
  DeleteTodoById(req, res);
};
