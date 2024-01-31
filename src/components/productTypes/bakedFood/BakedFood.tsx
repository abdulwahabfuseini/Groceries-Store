
import { BakeryData } from "@/assets/GroceriesData";
import BakedCard from "./BakedCard";
import CategoryTittle from "../CategoryTittle";
import Header from "../Header";

const BakedFood = () => {

  return (
    <div>
    <Header />
      <CategoryTittle category="Baked Foods" text="Fresh & hot From Oven" />
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {BakeryData.map((baked) => (
          <BakedCard
            key={baked.id}
            id={baked.id}
            name={baked.name}
            image={baked.image}
            price={baked.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BakedFood;
