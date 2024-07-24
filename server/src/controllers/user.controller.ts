import express, { Request, Response } from "express";

import { createUser, getUserById, getAllUsers, deleteUserById, updateUser } from "../service/user.service";
import { iUser } from "../interfaces";
import { buildResponse } from "../helper/response";

const route = express.Router();

route.get("/", async (_req, res: Response) => {
  try {
    const usersList = await getAllUsers();
    res.status(200).send(usersList);
  } catch (error: unknown) {
    if (error instanceof Error) {
      buildResponse(res, 404, error.message);
    }
  }
});

route.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(+id);
    buildResponse(res, 200, user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      buildResponse(res, 404, error.message);
    }
  }
});

route.post("/", async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd }: iUser = req.body;
    const user: iUser[] = await createUser(name, surname, email, pwd);
    res.status(200).send(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      buildResponse(res, 404, error.message);
    }
  }
});

route.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser: iUser[] = await deleteUserById(+id);
    res.status(200).send(deletedUser);
  } catch (error: unknown) {
    if (error instanceof Error) {
      buildResponse(res, 404, error.message);
    }
  }
});

route.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUser: iUser[] = await updateUser(+id, req.body);
    buildResponse(res, 200, updatedUser);
  } catch (error: unknown) {
    if (error instanceof Error) {
      buildResponse(res, 404, error.message);
    }
  }
});

export default route;
