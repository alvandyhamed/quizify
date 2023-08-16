"use client";
import React from "react";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

type Props = {
  text: string;
};

function SignOutButton({ text }: Props) {
  return (
    <Button
      onClick={() => {
        signOut().catch(console.error);
      }}
    >
      {text}
    </Button>
  );
}

export default SignOutButton;
