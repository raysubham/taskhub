import NextAuth from "next-auth";

import authConfig from "@/auth/auth.config";

import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: { id: string; picture: string } & DefaultSession["user"];
  }
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth(authConfig);

export const getCurrentUser = async () => {
  const session = await auth();

  if (!session?.user) return null;
  return session.user;
};
