import NextAuth from "next-auth";

import authConfig from "@/lib/auth/auth.config";

import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: { id: string; picture: string } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth
} = NextAuth(authConfig);
