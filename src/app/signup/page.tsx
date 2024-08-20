"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "postcss";

export default function Register() {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [loadings, setLoadings] = useState(false);
  const [sinupMessage, setSinupMessage] = useState("");

  const handleEmail = (event: any) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePassword = (event: any) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleName = (event: any) => {
    const value = event.target.value;
    setName(value);
  };

  const onSubmit = async () => {
    if (email && password && name) {
      try {
      } catch (error) {}
    }
  };

  return (
    <>
      <div className="py-36 sm:py-28 bg-white sm:bg-gray-100 flex min-h-full flex-1 flex-col justify-center sm:px-6 lg:px-8">
        <div className=" sm:mx-auto sm:w-full sm:max-w-[480px] ">
          <div className="bg-white px-6 pb-12  sm:shadow-lg sm:rounded-xl sm:px-12">
            <h2 className="mt-6 pb-12 sm:pt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>

            <div className="space-y-6">
              <div>
                <h1 className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </h1>

                <input
                  onChange={handleName}
                  value={name || ""}
                  className="mt-2 py-3"
                  type="text"
                  id="name"
                  placeholder="Eenter your name"
                />
              </div>

              <div>
                <h1 className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </h1>
                <input
                  onChange={handleEmail}
                  value={email || ""}
                  className="mt-2 py-3"
                  type="text"
                  id="email"
                  placeholder="Eenter your  email"
                />
              </div>

              <div>
                <h1 className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </h1>
                <input
                  onChange={handlePassword}
                  value={password || ""}
                  className="mt-2 py-3"
                  type="text"
                  id="password"
                  placeholder="Eenter your password"
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={onSubmit}
                  className="w-full uppercase rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Signup
                </button>
              </div>

              <p className=" sm:hidden sm:mt-5 text-center text-sm text-gray-500">
                Already you have account?{" "}
                <a
                  //   href="/login"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Please Login
                </a>
              </p>
            </div>
          </div>

          <p className="hidden sm:block sm:mt-5 text-center text-sm text-gray-500">
            Already you have account?{" "}
            <a
              //   href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Please Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
