import { TRPCError, initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import { ZodError } from "zod";

import type { Context } from "@/lib/trpc/context";

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter(opts) {
    const { shape, error } = opts;
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.code === "BAD_REQUEST" && error.cause instanceof ZodError
            ? error.cause.flatten()
            : null
      }
    };
  }
});

export const router = t.router;
export const publicProcedure = t.procedure;

const isAuthed = t.middleware(opts => {
  const { ctx } = opts;
  if (!ctx.session) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      session: ctx.session
    }
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);
