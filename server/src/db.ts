import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
const pool = new Pool({
  host: "localhost",
  port: 5432,
  password: process.env.DB_PASSWORD,
  user: "postgres",
  database: "EducationPlatform",
});

export default pool;
