import { Response } from "express";
import { iUser } from "../interfaces";
import { iCourse } from "../interfaces";

type MessageType = iCourse | iCourse[] | iUser | iUser[] | string;
export const buildResponse = (res: Response, number: number, message: MessageType) => {
  res.status(number).send(message);
};
