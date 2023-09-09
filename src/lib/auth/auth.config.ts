import GitHub from "next-auth/providers/github";

import { env } from "@/lib/env";

import type { NextAuthOptions } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/db";

export default {
  adapter: DrizzleAdapter(db),
  providers: [
    GitHub({
      clientId: env.AUTH_GITHUB_ID,
      clientSecret: env.AUTH_GITHUB_SECRET
    })
  ],
  debug: env.NODE_ENV === "development",
  callbacks: {
    session: ({ session, user }) => {
      session.user.id = user.id;
      return session;
    }
  },
  pages: {
    signIn: "/signin"
  }
} satisfies NextAuthOptions;
