import { iCourse } from "../interfaces";
import pool from "../db";

const getAllCoursesDB = async (): Promise<iCourse[]> => {
  const client = await pool.connect();
  try {
    const query = "select * from courses";
    const { rows } = await client.query(query);
    return rows;
  } catch (error: any) {
    return error.message;
  }
};

const createCourseDB = async (course: string, description: string): Promise<iCourse[]> => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const query = "insert into courses(course, description) values ($1,$2)";
    const { rows } = await client.query(query, [course, description]);
    await client.query("COMMIT");
    return rows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    return error.message;
  } finally {
    client.release();
  }
};

const getCourseDB = async (course: string): Promise<iCourse[]> => {
  const client = await pool.connect();
  try {
    const query = "select * from courses where course = $1";
    const { rows } = await client.query(query, [course]);
    return rows;
  } catch (error: any) {
    console.log(error.message);
  }
};

export { getAllCoursesDB, createCourseDB, getCourseDB };
