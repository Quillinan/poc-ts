import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

const db = new Pool({
  connectionString: connectionString,
});

export default db;
