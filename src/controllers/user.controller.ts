import express, { Request, Response } from "express";
const route = express.Router();
import { createUser, getUserById, getAllUsers, deleteUserById, updateUser } from "../service/user.service";
import { iUser } from "../interfaces";
import { buildResponse } from "../helper/response";
route.get("/", async (_req, res: Response) => {
  try {
    const usersList = await getAllUsers();
    res.status(200).send(usersList);
  } catch (error: any) {
    res.status(404).send(error.message);
  }
});

route.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(+id);
    buildResponse(res, 200, user);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post("/", async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd }: iUser = req.body;
    const user: iUser[] = await createUser(name, surname, email, pwd);
    res.status(200).send(user);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedUser: iUser[] = await deleteUserById(+id);
    res.status(200).send(deletedUser);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});
route.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedUser: iUser[] = await updateUser(+id, req.body);
    buildResponse(res, 200, updatedUser);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});
export default route;
