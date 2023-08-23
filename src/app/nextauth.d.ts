import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    expires: number;
    error?: string;
    user: {
      accessToken: string;
      idToken: string;
      plan: string;
      id: number;
      picture: string;
    } & DefaultSession["user"];
  }

  interface Profile {
    id: number;
  }
}
declare module "next-auth/jwt" {
  interface JMT {
    accessToken: string;
    idToken: string;
    plan: "free" | "core" | "pro" | "all";
  }
}
