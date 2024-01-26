import Link from "next/link";
import Design from "@/components/account/Design";
import Register from "@/components/account/Register";

// export const metadata = {
//   title: "Groceries Store | Create Account",
//   description: "New Here! Create an Account",
// };

const Signup = () => {
  return (
    <div className="mx-auto max-w-5xl w-full grid sm:place-content-center sm:px-4 h-full md:h-screen sm:grid-cols-2 lg:grid-cols-5 sm:pt-14 pt-20 pb-10 sm:pb-12 bg-white sm:bg-slate-100">
      <div className="sm:hidden z-40">
        <Design />
      </div>
      <div className=" sm:col-span-1 lg:col-span-2">
        <Register />
      </div>
      <div className="hidden sm:block sm:col-span-1 shadow bg-white lg:col-span-3 relative overflow-hidden">
        <div className="text-center hidden sm:flex items-center justify-center h-full flex-col">
        <header className="text-3xl font-semibold">Groceries Store</header>
          <h1 className="text-2xl py-3 font-medium">
            New Here! <br className="lg:hidden" /> Create an account
          </h1>
          <Link href="/signin">
            <h6 className="hover:underline text-center pt-4 text-lg hover:text-green-600 hidden sm:block cursor-pointer font-medium">
              {" "}
              Already have an account!{" "}
              <span className=" font-semibold text-green-600">
                Sign In
              </span>{" "}
            </h6>
          </Link>
        </div>
        <Design />
      </div>
    </div>
  );
};

export default Signup;
