
import { IcecreamsData } from "@/assets/GroceriesData";
import CreamCard from "./CreamCard";
import CategoryTittle from "../CategoryTittle";
import Header from "../Header";

const Creams = () => {
  return (
    <div>
      <Header />
      <CategoryTittle category="Ice Creams" text="frozen dessert" />
      <div className="grid w-full grid-cols-2 gap-2 py-8 sm:grid-auto-fit-xs">
        {IcecreamsData.map((cream) => (
          <CreamCard
            key={cream.id}
            id={cream.id}
            name={cream.name}
            image={cream.image}
            price={cream.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Creams;
