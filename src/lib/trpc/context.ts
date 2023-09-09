import { getUserAuth } from "@/lib/auth/utils";
import { db } from "@/lib/db";

import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export async function createContext(opts?: FetchCreateContextFnOptions) {
  const session = await getUserAuth();

  return {
    session,
    db,
    headers: opts && Object.fromEntries(opts.req.headers)
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
