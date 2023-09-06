"use client";
import { type OAuthProviderType } from "@auth/core/providers";
import { signIn, signOut } from "next-auth/react";

export function SignIn({
  provider,
  ...props
}: {
  provider: OAuthProviderType;
} & React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      onClick={e => {
        e.preventDefault();
        void signIn(provider);
      }}
      {...props}
    />
  );
}

export function SignOut(props: React.ComponentProps<"button">) {
  return (
    <button
      {...props}
      onClick={e => {
        e.preventDefault();
        void signOut();
      }}
    />
  );
}
