import Link from "next/link";
import Design from "@/components/account/Design";
import Login from "@/components/account/Login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groceries Store | Login",
  description: "Welcom Back! Login to your Account",
};

const Signin = () => {
  return (
    <div className="mx-auto max-w-5xl w-full grid sm:place-content-center sm:px-4 h-full md:h-screen sm:grid-cols-2 lg:grid-cols-5 sm:pt-14 pt-20 pb-10 sm:pb-12 bg-white sm:bg-slate-100 overflow-x-hidden">
      <div className=" sm:hidden">
        <Design />
      </div>
      <div className="hidden sm:block sm:col-span-1 shadow bg-white lg:col-span-3 relative overflow-hidden px-2">
        <div className="text-center hidden sm:flex items-center justify-center h-full flex-col">
          <header className="text-3xl font-semibold">Groceries Store</header>
          <h1 className="text-2xl py-3 font-medium">
            Welcome Back! <br className="lg:hidden" /> Signin to your account
          </h1>
          <Link href="/signup">
            <h6 className="hover:underline text-center pt-4 text-lg hover:text-green-600 hidden sm:block cursor-pointer">
              {" "}
              Don&apos;t have an account?{" "}
              <span className=" font-semibold text-green-600">
                Sign Up
              </span>{" "}
            </h6>
          </Link>
        </div>
        <Design />
      </div>
      <div className="sm:col-span-1 lg:col-span-2 ">
        <Login />
      </div>
    </div>
  );
};

export default Signin;
