import Image from "next/image";

import { auth } from "@/auth";
import { SignIn, SignOut } from "@/components/auth-components";

export default async function Page() {
  const session = await auth();

  if (session) {
    return (
      <>
        <div className="flex space-x-4">
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
          <SignOut>Sign out</SignOut>
        </div>
        <Image src={session?.user?.picture} width={100} height={100} alt="Profile Pic" />
      </>
    );
  }
  return <SignIn provider="github">Sign in with GitHub</SignIn>;
}
