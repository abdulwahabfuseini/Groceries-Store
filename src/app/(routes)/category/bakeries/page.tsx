import BakedFood from "@/components/productTypes/bakedFood/BakedFood";

export const metadata = {
  title: "Groceries App | Bakeries",
  description: "Our Baked Fooods",
};

const Bakeries = () => {
  return (
    <div className="w-full px-4 py-6 mx-auto max-w-7xl lg:py-10">
      <BakedFood />
    </div>
  );
};

export default Bakeries;
