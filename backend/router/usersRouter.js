import { Router } from "express";
import { userModel } from "../models/usersModel.js";

const userRouter = Router();

userRouter.route("/create").post(async (req, res) => {
  try {
    const user = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      re_password: req.body.re_password,
      gender: req.body.gender,
    });
    if (user.password === user.re_password) {
      const newUser = await user.save();
      if (newUser) {
        res.status(201).send({
          msg: "Successfully created user.",
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
            isAdmin: newUser.isAdmin,
          gender:newUser.gender
        });
      } else {
        res.status(401).send({ msg: "unable to save user. try again" });
      }
    } else {
      res.status(401).send({ msg: "unable to create user. try again" });
    }
  } catch (error) {
    res.status(404).send({ msg: error });
  }
});

userRouter.route("/signin").post(async (req, res) => {
  try {
    const signin_user = await userModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (signin_user) {
      res.status(201).send({
        id: signin_user._id,
        name: signin_user.name,
        email: signin_user.email,
          isAdmin: signin_user.isAdmin,
        gender:signin_user.gender
      });
    } else {
      res.status(401).send({
        msg: "invalid email or password. \n try again with a correct password or email address",
      });
    }
  } catch (error) {
    res.status(404).send({ msg: error });
  }
});

userRouter.route("/").get(async (req, res) => {
  try {
    const users = await userModel.find({});
    if (users) {
      res.status(201).send(users);
    } else {
      res.status(401).send({ msg: "no user found" });
    }
  } catch (error) {
    res.status(404).send({ msg: error });
  }
});

userRouter.route("/:id").get(async (req, res) => {
  try {
    const user_id = { _id: req.params.id };
    const users = await userModel.findById(user_id);
    if (users) {
      res.status(201).send(users);
    } else {
      res.status(401).send({ msg: "no user found" });
    }
  } catch (error) {
    res.status(404).send({ msg: error });
  }
});

export default userRouter;
