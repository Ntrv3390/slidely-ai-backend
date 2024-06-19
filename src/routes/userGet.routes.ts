import express from "express";
import {
  handleGetUserById,
  handleEditUserById,
  handleDeleteUserById,
  handleGetUserByEmail,
} from "../controllers/user.controllers";

const userGetRouter = express.Router();

userGetRouter
  .route("/:id")
  .get(handleGetUserById)
  .put(handleEditUserById)
  .delete(handleDeleteUserById);
userGetRouter.route("/email/:email").get(handleGetUserByEmail);

export { userGetRouter };
