// import { CardProps } from "@/contexts/Types";
// import { Rate } from "antd";
// import Image from "next/image";
// import toast from "react-hot-toast";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { useShoppingCart } from "@/contexts/CartContext";

// const AddFruit = ({id, name, image, price, rating, desc }: CardProps) => {
//     const { getItemQuantity, increaseCartQty, decreaseCartQty, removeFromCart } =
//     useShoppingCart();

//   const quantity = getItemQuantity(id)

//   return (
//     <div>
//       <div className="relative object-contain w-full sm:bg-white h-80 sm:h-96 sm:col-span-2">
//         <Image
//           src={`/images/Fruits/${image}`}
//           fill
//           alt="fruits"
//           className="object-contain sm:border rounded-sm lg:hover:scale-105"
//         />
//       </div>
//       <div className="w-full sm:col-span-3 bg-gray-100 px-3 py-5 rounded-tl-3xl rounded-tr-3xl">
//         <h1 className="pb-3 text-2xl font-semibold">{id}</h1>
//         <Rate defaultValue={rating} allowHalf />
//         <p className="py-4 font-semibold ">
//           Unit Price: GH₵: <span>{price.toLocaleString()}</span>
//         </p>
//         <p>{desc}</p>
//         <div className="flex flex-wrap font-semibold items-center gap-3 py-10">
//           <span>Qty:</span>
//           <button className="px-4 py-3 border rounded-md hover:bg-black hover:text-white">
//             <FaPlus
//               onclick={() => increaseCartQty(id)}
//               className="w-5 h-5 "
//             />
//           </button>
//           <h5 className="px-6 py-3 text-lg border rounded-md">1</h5>
//           <button className="px-4 py-3 border rounded-md hover:bg-black hover:text-white">
//             <FaMinus
//               onclick={() => decreaseCartQty(id)}
//               className="w-5 h-5 "
//             />
//           </button>
//           <button
//             // onClick={() => {
//             //   dispatch(addToCart(fruit)),
//             //     toast.success(`${fruit?.name} is added to Cart!`);
//             // }}
//             className="px-4 py-3 text-white bg-yellow-300 border rounded-lg text-lg hover:bg-blue-600"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddFruit;
