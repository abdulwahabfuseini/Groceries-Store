import FreshFruit from "@/components/productTypes/freshFruit/FreshFruit";

export const metadata = {
  title: "Groceries Store | Fresh Fruits",
  description: "Fresh and Organic Fruits",
};

const Fruits = () => {
  return (
    <div className="w-full px-4 py-10 mx-auto lg:py-10 max-w-7xl">
      <FreshFruit />
    </div>
  );
};

export default Fruits;
