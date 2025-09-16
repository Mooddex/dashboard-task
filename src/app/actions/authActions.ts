"use server";

import { signIn } from "@/lib/auth";


// using google auth.js
export async function googleSignIn() {
  await signIn("google", { redirectTo: "/dashboard" });
}
