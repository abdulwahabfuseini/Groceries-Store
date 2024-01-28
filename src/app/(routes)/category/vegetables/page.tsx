import FreshVegetables from '@/components/productTypes/freshVegetables/FreshVegetables';
import React from 'react'

export const metadata = {
  title: "Groceries Store | Fresh Vegetables",
  description: "Fresh and Organic Vegetables",
};

const Vegetables = () => {
  return (
    <div className="w-full px-3 sm:px-5 py-10 mx-auto max-w-7xl">
      <FreshVegetables />
    </div>
  )
}

export default Vegetables