import Image from "next/image";
import LoginForm from "./LoginForm";
import { auth } from "@/auth";
import Logout from "./LogoutForm";

import bijoy2024 from "../../../public/logo.jpg";

const WithoutLogin = ({ session }) => {
  return (
    <div className="flex flex-1 items-center justify-end gap-x-6">
      {session?.user ? (
        <div className="flex flex-col  justify-center items-center">
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={42}
            height={42}
            className=" w-8 h-8 rounded-full"
          />
          <h1 className="text-xl">{session?.user?.name}</h1>
        </div>
      ) : (
        <LoginForm />
      )}

      {session?.user ? (
        <Logout />
      ) : (
        <a
          href={`/signup`}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign up
        </a>
      )}
    </div>
  );
};
export default async function Header() {
  const session = await auth();

  // if (!session?.user) redirect("/");
  return (
    <header className="bg-white">
      <div className=" shadow-md fixed z-50 w-full bg-white items-center">
        <div className="max-w-7xl mx-auto  px-4 lg:px-8 flex h-[70px] lg:h-20 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
              <a href="/">
                <Image
                  width={400}
                  height={400}
                  className="h-16 lg:h-16 w-auto cursor-pointer"
                  src={bijoy2024}
                  alt="Your Company"
                />
              </a>
            </div>
          </div>

          <div className=" lg:ml-4 flex items-center">
            <WithoutLogin session={session} />
          </div>
        </div>
      </div>
    </header>
  );
}
