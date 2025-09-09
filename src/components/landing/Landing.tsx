import HeroSection from "./Hero";
import Signin from "./Signin";

export default function Landing() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <HeroSection />
      <div className="flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md">
          <Signin />
        </div>
      </div>
    </div>
  );
}
