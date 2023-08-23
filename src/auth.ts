import NextAuth from "next-auth";
import GitHub from "next-auth/providers/GitHub";
export const {
  handlers: { GET, POST },
  auth,
  CSRF_experimental,
} = NextAuth({
  providers: [GitHub],
  debug: true,
});
