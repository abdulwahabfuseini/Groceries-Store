import FreshVegetables from '@/components/productTypes/freshVegetables/FreshVegetables';
import React from 'react'

export const metadata = {
  title: "Groceries App | Fresh Vegetables",
  description: "Fresh and Organic Vegetables",
};

const Vegetables = () => {
  return (
    <div className='w-full px-4 py-6 mx-auto lg:py-10 max-w-7xl'>
      <FreshVegetables />
    </div>
  )
}

export default Vegetables