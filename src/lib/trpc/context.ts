import { auth } from "@/lib/auth";

import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export async function createContext(opts?: FetchCreateContextFnOptions) {
  const session = await auth();

  return {
    session: session,
    headers: opts && Object.fromEntries(opts.req.headers)
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
