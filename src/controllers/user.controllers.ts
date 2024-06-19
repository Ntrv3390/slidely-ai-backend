import { readUsersFromDb, writeUsersToDb } from "../utils";
import { Request, Response } from "express";

interface User {
  id: number;
  name: string;
  email: string;
  number: number;
  github_link: string;
  stopwatch_time: string;
}

const dbFilePath = "./src/database/db.json";

async function handleCreateNewUser(req: Request, res: Response) {
  try {
    const { name, email, number, github_link, stopwatch_time } = req.body;
    const allUsers = readUsersFromDb(dbFilePath);
    if (
      [name, email, number, github_link, stopwatch_time].some(
        (item) => !item || (typeof item === "string" && item.trim() === "")
      )
    ) {
      return res
        .status(400)
        .json({ status: 400, message: "All feilds are compulsary." });
    }
    const newUser: User = {
      id: Date.now(),
      name,
      email,
      number,
      github_link,
      stopwatch_time,
    };
    allUsers.users.push(newUser);
    const usersObject = { users: allUsers.users };
    writeUsersToDb(usersObject, dbFilePath);
    return res.status(201).json({
      status: 201,
      message: "User created successfully.",
      user: newUser,
    });
  } catch (error: Error | any) {
    return res.status(501).json({ status: 501, message: error.message });
  }
}

async function handleGetUserByIndex(req: Request, res: Response) {
  try {
    const index = parseInt(req.params.index, 10);
    const allUsers = readUsersFromDb(dbFilePath);
    const users = allUsers.users;
    const user = users[index];
    if (!user) {
      res.status(409).json({
        status: 409,
        message: `User with index - ${index} doesn't exists.`,
      });
      return;
    }
    res
      .status(201)
      .json({ status: 201, message: "User found successfully", user });
  } catch (error: Error | any) {
    res.status(501).json({ status: 501, message: error.message });
  }
}

async function handleEditUserByIndex(req: Request, res: Response) {
  try {
    const index = parseInt(req.params.index, 10);
    const allUsers = readUsersFromDb(dbFilePath);
    const users = allUsers.users;
    const user = users[index];
    if (!user) {
      res.status(409).json({
        status: 409,
        message: `User with index - ${index} doesn't exists.`,
      });
      return;
    }
    users[index] = { ...users[index], ...req.body };
    const usersObject = { users: allUsers.users };
    writeUsersToDb(usersObject, dbFilePath);
    res.status(200).json({
      status: 200,
      message: `User with index - ${index} updated successfully.`,
      user: users[index],
    });
  } catch (error: Error | any) {
    res.status(501).json({ status: 501, message: error.message });
  }
}

async function handleDeleteUserByIndex(req: Request, res: Response) {
  try {
    const index = parseInt(req.params.index, 10);
    const allUsers = readUsersFromDb(dbFilePath);
    const users = allUsers.users;
    const user = users[index];
    if (!user) {
      res.status(409).json({
        status: 409,
        message: `User with index - ${index} doesn't exists.`,
      });
      return;
    }
    users.splice(index, 1);
    const usersObject = { users: allUsers.users };
    writeUsersToDb(usersObject, dbFilePath);
    res.status(200).json({
      status: 200,
      message: `User with index - ${index} deleted successfully.`,
      user: users[index],
    });
  } catch (error: Error | any) {
    res.status(501).json({ status: 501, message: error.message });
  }
}

async function handleGetUserByEmail(req: Request, res: Response) {
  try {
    const email = req.params.email;
    const data = readUsersFromDb(dbFilePath);
    const users = data.users;
    const user = users.find((u: any) => u.email === email);
    if (!user) {
      res.status(409).json({
        status: 409,
        message: `User with email - ${email} doesn't exists.`,
      });
      return;
    }
    res
      .status(201)
      .json({ status: 201, message: "User found successfully", user });
  } catch (error: Error | any) {
    res.status(501).json({ status: 501, message: error.message });
  }
}

export {
  handleCreateNewUser,
  handleGetUserByIndex,
  handleEditUserByIndex,
  handleDeleteUserByIndex,
  handleGetUserByEmail
};
