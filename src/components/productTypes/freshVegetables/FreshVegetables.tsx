
import { VegetablesData } from "@/assets/GroceriesData";
import VegetableCard from "./VegetableCard";
import CategoryTittle from "../CategoryTittle";
import Header from "../Header";

const FreshVegetables = () => {

  return (
    <div>
      <Header />
      <CategoryTittle
        category=" Fresh & organic Vegetables"
        text="Fresh From Farm"
      />
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {VegetablesData.map((vegetable) => (
          <VegetableCard
            key={vegetable.id}
            id={vegetable.id}
            name={vegetable.name}
            image={vegetable.image}
            price={vegetable.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FreshVegetables;
