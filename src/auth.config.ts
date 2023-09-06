import { NextAuthConfig } from "next-auth";
import GitHub from "@auth/core/providers/github";

export default {
  providers: [GitHub],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },
  pages: {
    signIn: "/signin",
  },
} satisfies NextAuthConfig;
