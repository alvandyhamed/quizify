import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import React from "react";

type Props = {};

const Signin = async (props: Props) => {
  const session = await getAuthSession();
  console.log("session.....->", session);
  return (
    <>
      <div> Welcome Signin</div>;
      <Link href={"/"}>
        <h2>goto Hmoe</h2>
      </Link>
    </>
  );
};

export default Signin;
