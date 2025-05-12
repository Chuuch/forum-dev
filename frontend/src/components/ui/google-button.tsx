import { Button } from "../ui/button";
import { IoLogoGoogle } from "react-icons/io5";
import { useState } from "react";
import { Spinner } from "./spinner";
// import { db } from "../../config/db";

export default function GoogleLoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
  };
  try {
    //
  } catch (error) {
    console.error("Error logging in with Google:", error);
    setIsLoading(false);
  }

  return (
    <Button
      className="flex w-full px-4 py-2 cursor-pointer transition-all bg-gray-300 dark:bg-gray-300 hover:bg-gray-200 dark:hover:bg-gray-200"
      onClick={loginWithGoogle}
      variant="default"
      disabled={isLoading}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <p className="text-black">Продължи с Google</p>
          <p className="text-black">
            <IoLogoGoogle />
          </p>
        </>
      )}
    </Button>
  );
}
