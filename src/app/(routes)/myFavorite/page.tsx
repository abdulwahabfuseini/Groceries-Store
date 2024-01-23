// "use client";

// import { useSelector } from "react-redux";
// import { StateProps } from "@/contexts/Types";
// import { TbChevronLeft } from "react-icons/tb";
// import Link from "next/link";
// import FavoriteCard from "@/components/FavoriteCard";

// const Myfavorite = () => {
//   const favoriteData = useSelector((state: StateProps) => state.cart);

//   return (
//     <div className="w-full max-w-7xl mx-auto py-20 px-4">
//       <div className="flex items-center gap-5">
//         <Link href="/category">
//           <button className="p-2 font-semibold text-center bg-slate-100 mx-2 sm:mx-0 sm:bg-white rounded-full text">
//             <TbChevronLeft className="w-8 h-8" />
//           </button>
//         </Link>
//         <h1 className="text-xl font-semibold">Favorite Products</h1>
//       </div>
//       <div className="py-12 grid grid-cols-2 sm:grid-auto-fit-xs gap-3">
//         {favoriteData.map((favorite) => (
//           <FavoriteCard
//             key={favorite.id}
//             name={favorite.name}
//             price={favorite.price}
//             image={favorite.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Myfavorite;
