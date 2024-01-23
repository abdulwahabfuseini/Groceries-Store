import Link from 'next/link'
import { TbChevronLeft } from 'react-icons/tb'

const SoftDrink = () => {
  return (
    <div>
       <Link href="/category">
       <button className="p-2 mb-8 font-semibold text-center bg-white rounded-full text">
          <TbChevronLeft className="w-10 h-10" />
        </button>
      </Link>
        <h1 className="text-xl font-semibold uppercase">Drinks and Beverages</h1>
    </div>
  )
}

export default SoftDrink