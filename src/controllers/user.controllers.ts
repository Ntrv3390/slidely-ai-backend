import { readUsersFromDb, writeUsersToDb } from "../utils";
import { Request, Response } from "express";

interface User {
  id: number;
  name: string;
  email: string;
  number: number;
  githubUrl: string;
  stopwatch: string;
}

const dbFilePath = "./src/database/db.json";

async function handleCreateNewUser(req: Request, res: Response) {
  try {
    const { name, email, number, githubUrl, stopwatch } = req.body;
    const allUsers = readUsersFromDb(dbFilePath);
    if (
      [name, email, number, githubUrl, stopwatch].some(
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
      githubUrl,
      stopwatch,
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

async function handleGetUserById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const data = readUsersFromDb(dbFilePath);
    const users = data.users;
    const user = users.find((u: any) => u.id === id);
    if (!user) {
      res.status(409).json({
        status: 409,
        message: `User with id - ${id} doesn't exists.`,
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

async function handleEditUserById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const allUsers = readUsersFromDb(dbFilePath);
    const users = allUsers.users;
    const userIndex = users.findIndex((u: any) => u.id === id);
    if (userIndex === -1) {
      res.status(409).json({
        status: 409,
        message: `User with id - ${id} doesn't exist.`,
      });
      return;
    }
    users[userIndex] = { ...users[userIndex], ...req.body };
    const usersObject = { users: allUsers.users };
    writeUsersToDb(usersObject, dbFilePath);
    res.status(200).json({
      status: 200,
      message: `User with id - ${id} updated successfully.`,
      user: users[userIndex],
    });
  } catch (error: Error | any) {
    res.status(501).json({ status: 501, message: error.message });
  }
}

async function handleDeleteUserById(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id, 10);
    const allUsers = readUsersFromDb(dbFilePath);
    const users = allUsers.users;
    const userIndex = users.findIndex((u: any) => u.id === id);
    if (userIndex === -1) {
      res.status(409).json({
        status: 409,
        message: `User with id - ${id} doesn't exist.`,
      });
      return;
    }
    users.splice(userIndex, 1);
    const usersObject = { users: allUsers.users };
    writeUsersToDb(usersObject, dbFilePath);
    res.status(200).json({
      status: 200,
      message: `User with id - ${id} deleted successfully.`,
      user: users[userIndex],
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
  handleGetUserById,
  handleEditUserById,
  handleDeleteUserById,
  handleGetUserByEmail
};
