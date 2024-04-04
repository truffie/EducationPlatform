import pool from "../db";
import { iUser } from "../interfaces";

const getAllUsersDB = async (): Promise<iUser[]> => {
  const client = await pool.connect();
  try {
    const query = "select * from users order by id asc";
    const { rows } = await client.query(query);
    return rows;
  } catch (error: any) {
    console.log(error.message);
  }
};

const getUserByIdDB = async (id: number): Promise<iUser[]> => {
  const client = await pool.connect();
  try {
    const query = "select * from users where id = $1";
    const { rows } = await client.query(query, [id]);
    return rows;
  } catch (error: any) {
    console.log(error.message);
  }
};

const getUserByEmailDB = async (email: string): Promise<iUser[]> => {
  const client = await pool.connect();
  try {
    const query = "select * from users where email = $1";
    const { rows } = await client.query(query, [email]);
    return rows;
  } catch (error: any) {
    console.log(error.message);
  }
};

const createUserDB = async (name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const query = "insert into users(name,surname,email,pwd) values($1,$2,$3,$4) returning *";
    const { rows } = await client.query(query, [name, surname, email, pwd]);
    await client.query("COMMIT");
    return rows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    console.log(error.message);
  } finally {
    client.release();
  }
};

const deleteUserByIdDB = async (id: number): Promise<iUser[]> => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const query = "delete from users where id = $1 returning *";
    const { rows } = await client.query(query, [id]);
    await client.query("COMMIT");
    return rows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    console.log(error.message);
  } finally {
    client.release();
  }
};
const updateUserDB = async (id: number, body: iUser): Promise<iUser[]> => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const query = "update users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *";
    const { rows } = await client.query(query, [body.name, body.surname, body.email, body.pwd, id]);
    await client.query("COMMIT");
    return rows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    console.log(error.message);
  } finally {
    client.release();
  }
};
export { createUserDB, getUserByIdDB, getUserByEmailDB, getAllUsersDB, deleteUserByIdDB, updateUserDB };
