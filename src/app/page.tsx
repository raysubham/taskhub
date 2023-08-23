import Image from "next/image";
import { auth } from "../auth";
import { SignIn, SignOut } from "../components/auth-client-components";

export default async function Page() {
  const user = await auth();
  console.log({ okkk: user });

  if (user) {
    return (
      <>
        <p>{user.user?.name}</p>
        <Image
          src={user.user?.picture}
          width={100}
          height={100}
          alt="Profile Pic"
        />
        <SignOut>Sign out</SignOut>
      </>
    );
  }
  return <SignIn provider="github">Sign in with GitHub</SignIn>;
}
