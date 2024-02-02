

import { TbChevronLeft } from "react-icons/tb";
import Link from "next/link";

const Privacy = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-3 sm:px-5 py-12 sm:py-14'>
         <Link href="/overview">
        <button className=" p-2 font-semibold  text-center mb-7 bg-white rounded-full text">
          <TbChevronLeft className="w-8 h-8" />
        </button>
      </Link>
    </div>
  )
}

export default Privacy