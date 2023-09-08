"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const SignIn = () => {
  const searchParams = useSearchParams();

  return (
    <div className="flex items-center justify-center">
      <button
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => {
          void signIn("github", {
            redirect: true,
            callbackUrl: searchParams.get("callbackUrl") ?? "/"
          });
        }}
      >
        Sign in with Github
      </button>
    </div>
  );
};

export default SignIn;
