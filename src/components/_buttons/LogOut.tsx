"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      className="cursor-pointer text-red-500 hover:bg-[#2a2a2a]"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      {" "}
      Logout
    </button>
  );
}
