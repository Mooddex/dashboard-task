import { signIn } from "@/auth";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-gray-100 rounded-lg p-8 shadow-md">
        <h2 className="text-gray-900 text-2xl font-semibold mb-6 text-center">
          Sign Up
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* Password */}
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
            name="password"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-2 px-3 leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>

        {/* Create Account */}
        <button className="w-full text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded-lg text-lg cursor-pointer mb-4 transition">
          Create Account
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign Up */}
        <form
          action={async () => {
            "use server";
            await signIn("google", { callbackUrl: "/main" });
          
          }}
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-lg text-gray-700 bg-white hover:bg-gray-100 transition cursor-pointer"
          >
            <FcGoogle size={20} /> Sign up with Google
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/" className="text-green-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
