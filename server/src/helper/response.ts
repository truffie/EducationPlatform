import { Response } from "express";
import { iUser, iCourse } from "../interfaces";

type MessageType = iCourse | iCourse[] | iUser | iUser[] | string;

export const buildResponse = (res: Response, number: number, message: MessageType) => {
  res.status(number).send(message);
};
