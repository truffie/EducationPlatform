import express, { Request, Response } from "express";
import { iUser } from "../interfaces";
import { buildResponse } from "../helper/response";
import { createToken } from "../helper/jwt";
import { authUser, registerUser } from "../service/api.service";
const route = express.Router();

route.post("/reg", async (req: Request, res: Response) => {
  try {
    const user: iUser = await registerUser(req.body);
    buildResponse(res, 201, user);
  } catch (error: any) {
    buildResponse(res, 400, error.message);
  }
});

route.post("/auth", async (req: Request, res: Response) => {
  try {
    const { email, pwd } = req.body;
    const user: iUser = await authUser(email, pwd);
    const token = createToken(user);
    buildResponse(res, 201, token);
  } catch (error: any) {
    buildResponse(res, 400, error.message);
  }
});
export default route;
