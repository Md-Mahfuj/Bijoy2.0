"use client";
import Image from "next/image";

import bijoy2024 from "../../../public/logo.jpg";

const WithoutLogin = () => {
  return (
    <div className="flex flex-1 items-center justify-end gap-x-6">
      <a
        href="#"
        className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900"
      >
        Log in
      </a>
      <a
        href={`/signup`}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign up
      </a>
    </div>
  );
};
export default function Header() {
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
            <WithoutLogin />
          </div>
        </div>
      </div>
    </header>
  );
}
