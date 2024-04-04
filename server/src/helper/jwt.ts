import jwt from "jsonwebtoken";
import { iUser } from "../interfaces";

export const createToken = (user: iUser) => {
  const secret = process.env.JWT_SECRET;
  return jwt.sign(user, secret);
};
