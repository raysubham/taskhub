"use client";

import Link from "next/link";

import { trpc } from "@/lib/trpc/client";

const ProtectedPage = () => {
  const todos = trpc.getTodos.useQuery();
  const addTodo = trpc.addTodo.useMutation();

  const handleAddTodo = () => {
    addTodo.mutate({
      name: "test"
    });
    void todos.refetch();
  };

  return (
    <div>
      <Link href="/" className="underline">
        Go to Homepage
      </Link>
      <h1 className="mt-4 text-2xl">Todo</h1>
      <ul>{todos?.data?.map(t => <li key={t.id}>{t.name}</li>)}</ul>
      <button
        type="button"
        className="px-4 py-2 mt-4 text-white bg-blue-600 rounded"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
  );
};

export default ProtectedPage;
