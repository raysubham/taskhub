import { type Config } from "drizzle-kit";

export default {
  schema: "./src/lib/db/schema/*",
  out: "./drizzle",
  verbose: true,
  strict: true,
  driver: "better-sqlite",
  dbCredentials: {
    url: "taskhub-sqlite.db"
  }
} satisfies Config;
