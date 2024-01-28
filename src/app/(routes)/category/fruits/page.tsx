import FreshFruit from "@/components/productTypes/freshFruit/FreshFruit";

export const metadata = {
  title: "Groceries Store | Fresh Fruits",
  description: "Fresh and Organic Fruits",
};

const Fruits = () => {
  return (
    <div className="w-full px-3 sm:px-5 py-10 mx-auto max-w-7xl">
      <FreshFruit />
    </div>
  );
};

export default Fruits;
