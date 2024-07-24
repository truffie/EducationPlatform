import { authUserByEmailDB, regUserDB } from "../database/api.database";
import { iUser } from "../interfaces";
import bcrypt from "bcrypt";

export const registerUser = async (user: iUser) => {
  const { name, surname, email, pwd } = user;
  if (!email || !name || !surname || !pwd) throw new Error("enter all your details");

  const findEmail = await authUserByEmailDB(email);
  if (findEmail.length) throw new Error("email already exists");

  const hashedPwd = await bcrypt.hash(pwd, +process.env.SALT_ROUNDS);

  const newUser = await regUserDB(name, surname, email, hashedPwd);
  if (!newUser.length) throw new Error("invalid data");

  return newUser[0];
};

export const authUser = async (email: string, pwd: string) => {
  if (!email) throw new Error("enter email");
  if (!pwd) throw new Error("enter password");

  const user = await authUserByEmailDB(email);

  if (!user.length) throw new Error("wrong email");
  if (!(await bcrypt.compare(pwd, user[0].pwd))) throw new Error("wrong password");

  return user[0];
};
