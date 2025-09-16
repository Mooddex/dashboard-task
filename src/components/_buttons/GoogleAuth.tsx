import { FcGoogle } from "react-icons/fc";
import { googleSignIn } from "@/app/actions/authActions"; 

interface SigninProps {
  ButtonText: string;
}

export default function GoogleAuth({ ButtonText }: SigninProps) {
  return (
    <form action={googleSignIn} className="w-full">
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-lg text-gray-700 bg-white hover:bg-gray-100 transition cursor-pointer"
      >
        <FcGoogle size={20} />
        <span>{ButtonText}</span>
      </button>
    </form>
  );
}
