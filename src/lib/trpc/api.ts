/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { loggerLink } from "@trpc/client";
import { experimental_nextCacheLink as nextCacheLink } from "@trpc/next/app-dir/links/nextCache";
import { experimental_createTRPCNextAppDirServer as createTRPCNextAppDirServer } from "@trpc/next/app-dir/server";
import { cookies } from "next/headers";
import SuperJSON from "superjson";

// eslint-disable-next-line sort-imports
import { auth } from "@/lib/auth";
import { appRouter } from "@/lib/trpc";

/**
 * This client invokes procedures directly on the server without fetching over HTTP.
 */
export const api = createTRPCNextAppDirServer<typeof appRouter>({
  config() {
    return {
      transformer: SuperJSON,
      links: [
        loggerLink({
          enabled: () => true
        }),
        nextCacheLink({
          revalidate: 1,
          router: appRouter,
          async createContext() {
            const session = await auth();
            return {
              session,
              headers: {
                cookie: cookies().toString(),
                "x-trpc-source": "rsc-invoke"
              }
            };
          }
        })
      ]
    };
  }
});
