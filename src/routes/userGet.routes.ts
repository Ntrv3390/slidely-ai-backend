import express from "express";
import {
  handleGetUserByIndex,
  handleEditUserByIndex,
  handleDeleteUserByIndex,
  handleGetUserByEmail,
} from "../controllers/user.controllers";

const userGetRouter = express.Router();

userGetRouter
  .route("/:index")
  .get(handleGetUserByIndex)
  .put(handleEditUserByIndex)
  .delete(handleDeleteUserByIndex);
userGetRouter.route("/email/:email").get(handleGetUserByEmail);

export { userGetRouter };
