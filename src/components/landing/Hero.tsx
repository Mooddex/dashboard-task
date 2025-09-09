import Image from "next/image";
import logo from "@/img/dashboard-landing.png";

export default function HeroSection() {
    return(
        <div className="flex flex-col items-center justify-center bg-indigo-600 text-white p-8">
        <Image
          src={logo}
          alt="App logo"
          width={150}
          height={120}
          priority
          className="mb-6 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          Welcome to the Dashboard
        </h1>
        <p className="text-indigo-100 text-center max-w-md">
          Manage your account, explore features, and get started in seconds.
        </p>
      </div>
    );
};