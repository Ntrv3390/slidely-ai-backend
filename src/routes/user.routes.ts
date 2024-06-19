import express from "express";
import {
  handleCreateNewUser,
  handleGetUserById,
  handleEditUserById,
  handleDeleteUserById,
  handleGetUserByEmail
} from "../controllers/user.controllers";

const userRouter = express.Router();

userRouter.post("/", handleCreateNewUser);

userRouter
  .route("/:id")
  .get(handleGetUserById)
  .put(handleEditUserById)
  .delete(handleDeleteUserById);
userRouter
  .route("/email/:email") 
  .get(handleGetUserByEmail)

export { userRouter };
