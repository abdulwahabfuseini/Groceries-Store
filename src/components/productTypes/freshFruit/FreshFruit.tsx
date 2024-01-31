
import { FruitData } from "@/assets/GroceriesData";
import FruitCard from "./FruitCard";
import CategoryTittle from "../CategoryTittle";
import Header from "../Header";

const FreshFruit = () => {
  return (
    <div>
      <Header />
      <CategoryTittle
        category=" Fresh and organic Fruits"
        text="Fresh From Farm"
      />
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {FruitData.map((fruits) => (
          <FruitCard
            key={fruits.id}
            id={fruits.id}
            name={fruits.name}
            image={fruits.image}
            price={fruits.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FreshFruit;
