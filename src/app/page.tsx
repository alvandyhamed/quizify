import SignInButton from "@/components/SigningButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAuthSession } from "@/lib/nextauth";
import React from "react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getAuthSession();
  if (session?.user) {
    //that means the user is logged
    return redirect("/dashboard");
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Welcome to Quizmify</CardTitle>
          <CardDescription>
            Quzmify Very very important HA Ha Ha Ha Vala Bekhoda Az in behtar
            Nadarim !
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignInButton text="Sing in with Google" />
        </CardContent>
      </Card>
    </div>
  );
}
