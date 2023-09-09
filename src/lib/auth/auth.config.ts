import GitHub from "@auth/core/providers/github";

import { env } from "@/lib/env";

import type { NextAuthConfig } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db";

export default {
  adapter: DrizzleAdapter(db),
  providers: [GitHub],
  debug: env.NODE_ENV === "development",
  pages: {
    signIn: "/signin"
  }
} satisfies NextAuthConfig;
