import axios from "axios";
import { CREATEUSER, SIGNUSER } from "../inteface";
import { loadDb } from "./localStorageHook";

export async function createTodo(
  email: SIGNUSER["email"],
  password: SIGNUSER["password"]
) {
  const db = loadDb();
  const sign = {
    email: email,
    password: password,
  };

  console.log(sign);

  const { data } = await axios.post(
    "http://127.0.0.1:3001/api/v1/users/signin/",
    sign
  );
  db.length = 0;
  db.push(data);
  localStorage.setItem("DETAILS", JSON.stringify(db));
  return data;
}

export async function createUser(
  name: CREATEUSER["name"],
  email: CREATEUSER["email"],
  password: CREATEUSER["password"],
  re_password: CREATEUSER["re_password"],
  gender: CREATEUSER["gender"]
) {
  const db = loadDb();
  const create = {
    name: name,
    email: email,
    password: password,
    re_password: re_password,
    gender: gender,
  };

  console.log(create);

  const { data } = await axios.post(
    "http://127.0.0.1:3001/api/v1/users/create/",
    create
  );
  db.length = 0;
  db.push(data);
  localStorage.setItem("USERDETAILS", JSON.stringify(db));
  return data;
}
