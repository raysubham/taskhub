import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/lib/trpc";
import { createContext } from "@/lib/trpc/context";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext,
    onError({ error }) {
      console.log("Error: ", error.message);
      console.log("Reason: ", JSON.stringify(error.cause, null, 4));
    }
  });

export { handler as GET, handler as POST };
