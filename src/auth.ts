import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "@/auth.config";

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
  if (session) {
    return session.user;
  }
  return null;
};
