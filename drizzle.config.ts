import { env } from "@/lib/env";
import { type Config } from "drizzle-kit";

export default {
  schema: "./src/lib/db/schema/*",
  out: "./drizzle",
  verbose: true,
  strict: true,
  driver: "better-sqlite",
  dbCredentials: {
    url: env.DATABASE_URL
  }
} satisfies Config;
