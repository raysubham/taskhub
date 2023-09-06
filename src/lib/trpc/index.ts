import { protectedProcedure, publicProcedure, router } from "@/lib/trpc/trpc";

export const appRouter = router({
  getTrpcClient: publicProcedure.query(opts => {
    console.log({ session: opts.ctx.session, headers: opts.ctx.headers });

    return "Hello TRPC Client!";
  }),
  getTrpcServer: protectedProcedure.query(opts => {
    console.log({ session: opts.ctx.session, headers: opts.ctx.headers });

    return "Hello TRPC Server!";
  })
});

export type AppRouter = typeof appRouter;
