import bcrypt from "bcrypt";
import { config } from "dotenv";
config();
import { createUserDB, getUserByIdDB, getUserByEmailDB, getAllUsersDB, deleteUserByIdDB, updateUserDB } from "../database/user.database";

import { iUser } from "../interfaces";
const getAllUsers = async (): Promise<iUser[]> => {
  const usersList: iUser[] = await getAllUsersDB();
  return usersList;
};

const getUserById = async (id: number): Promise<iUser[]> => {
  const user: iUser[] = await getUserByIdDB(id);
  return user;
};

const createUser = async (name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
  const findUser: iUser[] = await getUserByEmailDB(email);
  if (findUser.length) throw new Error("already exists");
  const user: iUser[] = await createUserDB(name, surname, email, pwd);
  console.log(user);
  return user;
};

const deleteUserById = async (id: number): Promise<iUser[]> => {
  const deletedUser: iUser[] = await deleteUserByIdDB(id);
  return deletedUser;
};

const updateUser = async (id: number, body: iUser): Promise<iUser[]> => {
  const findUserId: iUser[] = await getUserByIdDB(id);

  if (!findUserId.length) throw new Error("user not found");
  if (body.email) {
    const findUserEmail: iUser[] = await getUserByEmailDB(body.email);
    if (findUserEmail[0]) {
      if (findUserEmail[0].id !== findUserId[0].id) throw new Error("email already exists");
    }
  }
  if (!body.pwd.length) {
    body.pwd = findUserId[0].pwd;
  }
  const user = { ...findUserId[0], ...body };
  user.pwd = await bcrypt.hash(user.pwd, +process.env.SALT_ROUNDS);
  const updatedUser = await updateUserDB(id, user);
  return updatedUser;
};
export { createUser, getUserById, getAllUsers, deleteUserById, updateUser };
