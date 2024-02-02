import { TbChevronLeft } from "react-icons/tb";
import Link from "next/link";

const Privacy = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-5 py-12 sm:py-14">
      <Link href="/overview">
        <button className=" p-2 font-semibold  text-center mb-7 bg-white rounded-full text">
          <TbChevronLeft className="w-8 h-8" />
        </button>
      </Link>

      <div>
        <h1 className="text-2xl font-semibold sm:text-3xl"> Privacy Policy</h1>
        <p className="text-lg py-3">
          At Groceries Store, accessible from
          https://groceries-store-lovat.vercel.app/, one of our main priorities
          is the privacy of our visitors. This Privacy Policy document contains
          types of information that is collected and recorded by Groceries Store
          and how we use it. If you have additional questions or require more
          information about our Privacy Policy, do not hesitate to contact us.
        </p>
        <p className="text-lg py-3">
          While using our Site, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or
          identify you. Personally, identifiable information may include, but is
          not limited to your name, Personal Information.
        </p>
      </div>
      <div>
        <h1 className="text-xl py-2 font-semibold">
          Groceries Store follows a standard procedure of using log files.
        </h1>

        <p className="text-lg ">
          Like many site operators, we collect information that your browser
          sends whenever you visit our Site. This Log Data may include
          information such as your computer&apos;s Internet Protocol address,
          browser type, browser version, the pages of our Site that you visit,
          the time and date of your visit, the time spent on those pages, and
          other statistics.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
