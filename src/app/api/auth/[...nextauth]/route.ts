import { autOptions } from "@/lib/nextauth";
import NextAuth from "next-auth/next";
import { custom } from "openid-client";
import { HttpProxyAgent } from "hpagent";

// Set the default timeout value for all outgoing HTTP requests made by the openid-client package

const handler = NextAuth(autOptions);

export { handler as GET, handler as POST };
