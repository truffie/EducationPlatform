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
    const query = "insert into courses(course, description) values ($1,$2) returning *";
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

const getCourseByNameDB = async (course: string): Promise<iCourse[]> => {
  const client = await pool.connect();
  try {
    const query = "select * from courses where course = $1";
    const { rows } = await client.query(query, [course]);
    return rows;
  } catch (error: any) {
    return error.message;
  }
};

const getCourseByIdDB = async (id: number): Promise<iCourse[]> => {
  const client = await pool.connect();
  try {
    const query = "select * from courses where id = $1";
    const { rows } = await client.query(query, [id]);
    return rows;
  } catch (error: any) {
    return error.message;
  }
};

const updateCourseDB = async (id: number, course: string, description: string): Promise<iCourse[]> => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const query = "UPDATE COURSES SET course = $1, description = $2 WHERE id = $3 returning *";
    const { rows } = await client.query(query, [course, description, id]);
    await client.query("COMMIT");
    return rows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    return error.message;
  } finally {
    client.release();
  }
};
const deleteCourseDB = async (id: number) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const query = "DELETE FROM courses where id = $1 returning *";
    const { rows } = await client.query(query, [id]);
    await client.query("COMMIT");
    return rows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    return error.message;
  } finally {
    client.release();
  }
};
export { getAllCoursesDB, createCourseDB, getCourseByNameDB, getCourseByIdDB, updateCourseDB, deleteCourseDB };
