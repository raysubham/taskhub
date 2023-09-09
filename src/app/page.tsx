import Link from "next/link";

import { SignOut } from "@/components/auth";
import { api } from "@/lib/trpc/api";
import AddTodo from "@/components/add-todo";
import { getUserAuth } from "@/lib/auth/utils";

export default async function Page() {
  const session = await getUserAuth();
  const todos = await api.getTodos.query();

  return (
    <div className="py-4">
      {session ? (
        <div className="flex flex-col justify-between px-2">
          <div className="flex justify-between px-2">
            <div className="flex flex-col">
              <p>Signed in as {session?.user?.name}</p>
            </div>
            <SignOut className="rounded bg-blue-600 px-4 py-2 text-white">Sign Out</SignOut>
          </div>

          <div className="flex flex-col space-y-2">
            <AddTodo />
            <ul>{todos?.map(t => <li key={t.id}>{t.name}</li>)}</ul>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <button className="rounded bg-blue-600 px-4 py-2 text-white">
            <Link href="/api/auth/signin">Sign in</Link>
          </button>
        </div>
      )}
    </div>
  );
}
