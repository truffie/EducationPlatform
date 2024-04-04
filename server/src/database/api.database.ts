import pool from "../db";
import { iUser } from "../interfaces";

const authUserByEmailDB = async (email: string): Promise<iUser[]> => {
  const client = await pool.connect();
  try {
    const query = "select * from users where email = $1";
    const { rows } = await client.query(query, [email]);

    return rows;
  } catch (error: any) {
    console.log(error.message);
    return error.message;
  }
};

const regUserDB = async (name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
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
    return error.message;
  } finally {
    client.release();
  }
};

export { regUserDB, authUserByEmailDB };
