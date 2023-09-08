import { env } from "@/lib/env";
import Database from "better-sqlite3";
import { type BetterSQLite3Database, drizzle } from "drizzle-orm/better-sqlite3";

const sqlite = new Database(env.DATABASE_URL);
export const db: BetterSQLite3Database = drizzle(sqlite);
