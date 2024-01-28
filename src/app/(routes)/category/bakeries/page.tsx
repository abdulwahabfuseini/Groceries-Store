import BakedFood from "@/components/productTypes/bakedFood/BakedFood";

export const metadata = {
  title: "Groceries Store | Bakeries",
  description: "Our Baked Fooods",
};

const Bakeries = () => {
  return (
    <div className="w-full px-3 sm:px-5 py-10 mx-auto max-w-7xl">
      <BakedFood />
    </div>
  );
};

export default Bakeries;
