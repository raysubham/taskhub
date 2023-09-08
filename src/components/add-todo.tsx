"use client";

import { trpc } from "@/lib/trpc/client";
import { useRouter } from "next/navigation";

const AddTodo = () => {
  const addTodo = trpc.addTodo.useMutation();
  const router = useRouter();

  return (
    <form
      className="flex gap-2"
      onSubmit={e => {
        e.preventDefault();
        const todo = (e.currentTarget.elements?.todo)!.value;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (todo.trim() === "") {
          return;
        }

        addTodo.mutate(
          {
            name: todo
          },
          {
            onSuccess: () => {
              e.currentTarget.reset();
              router.refresh();
            }
          }
        );
      }}
    >
      <input type="text" name="todo" placeholder="Add a new todo..." className="h-8 bg-inherit" />
      <button className="rounded bg-blue-600 px-4 h-8 text-white" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
