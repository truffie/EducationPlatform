import pool from "../db";
import { iLesson } from "../interfaces";

async function createLessonsDB(title: string, course_id: number): Promise<iLesson[]> {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const query: string = "INSERT INTO lessons(title, course_id) VALUES ($1, $2) RETURNING *";
    const { rows } = await client.query(query, [title, course_id]);

    await client.query("COMMIT");

    return rows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    console.log(error.message);

    return [];
  } finally {
    client.release();
  }
}

async function getAllLessonsDB(): Promise<iLesson[]> {
  const client = await pool.connect();

  const query: string = "SELECT * FROM lessons ORDER BY id ASC";
  const { rows } = await client.query(query);
  client.release();
  return rows;
}

async function getLessonByCourseIdDB(course_id: number): Promise<iLesson[]> {
  const client = await pool.connect();
  const query: string = "SELECT * FROM lessons WHERE course_id = $1";
  const { rows } = await client.query(query, [course_id]);
  client.release();
  return rows;
}

async function updateLessonsDB(id: number, title: string, course_id: number): Promise<iLesson[]> {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const query: string = "UPDATE lessons SET title = $1, course_id = $2 WHERE id = $3 RETURNING *";
    const { rows } = await client.query(query, [title, course_id, id]);

    await client.query("COMMIT");

    return rows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    return [];
  } finally {
    client.release();
  }
}

async function deleteLessonDB(id: number): Promise<iLesson[]> {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const query: string = "DELETE FROM lessons WHERE id = $1 RETURNING *";
    const { rows } = await client.query(query, [id]);

    await client.query("COMMIT");

    return rows;
  } catch (error: any) {
    await client.query("ROLLBACK");
    return [];
  } finally {
    client.release();
  }
}

export { createLessonsDB, getAllLessonsDB, getLessonByCourseIdDB, updateLessonsDB, deleteLessonDB };
