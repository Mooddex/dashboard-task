"use client";

import Link from "next/link";
import GoogleAuthButton from "@/components/_buttons/GoogleAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Fake hardcoded user
const USER = { email: "test@example.com", password: "123456" };

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === USER.email && password === USER.password) {
      // Mocked JWT
      const token = "fake-jwt-token-123";
      localStorage.setItem("token", token);

      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-gray-100 rounded-lg p-8 shadow-md">
        <h2 className="text-gray-900 text-2xl font-semibold mb-6 text-center">
          Sign In
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg cursor-pointer mb-4 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign In */}
        <GoogleAuthButton ButtonText="Sign In with Google" />

        <p className="text-center text-gray-500 text-sm mt-6">
          New here?{" "}
          <Link href="/signup" className="text-green-600 hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="text-center text-gray-500 text-sm mt-2">
          Or check it out first{" "}
          <Link href="/dashboard" className="text-green-600 hover:underline">
            HERE
          </Link>
        </p>
      </div>
    </div>
  );
}
