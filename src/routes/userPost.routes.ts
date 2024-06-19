import express from "express";
import { handleCreateNewUser } from "../controllers/user.controllers";

const userPostRouter = express.Router();

userPostRouter.post("/", handleCreateNewUser);

export { userPostRouter };
