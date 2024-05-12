"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
export const AppBar = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Signin
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Signout
      </button>
      {JSON.stringify(session)}
    </div>
  );
};
