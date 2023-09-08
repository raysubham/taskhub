import { db } from "@/lib/db";
import { insertTodoSchema, todosTable } from "@/lib/db/schema/todo";
import { publicProcedure, router } from "@/lib/trpc/trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async opts => {
    const result = await db.select().from(todosTable);
    return result;
  }),
  addTodo: publicProcedure.input(insertTodoSchema).mutation(async ({ input }) => {
    const result = await db.insert(todosTable).values(input);
    return result;
  })
});

export type AppRouter = typeof appRouter;
