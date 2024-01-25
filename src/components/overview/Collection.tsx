// import Image from 'next/image'
// import React from 'react'

// const Collection = () => {
//   return (
    
//   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
//   <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
//     <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
//       <div className="mx-auto max-w-md text-center lg:text-left">
//         <header>
//           <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Watches</h2>

//           <p className="mt-4 text-gray-500">
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet
//             provident nulla error!
//           </p>
//         </header>

//         <a
//           href="#"
//           className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
//         >
//           Shop All
//         </a>
//       </div>
//     </div>

//     <div className="lg:col-span-2 lg:py-8">
//       <ul className="grid grid-cols-2 gap-4">
//         <li>
//           <a href="#" className="group block">
//             <img
//               src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
//               alt=""
//               className="aspect-square w-full rounded object-cover"
//             />

//             <div className="mt-3">
//               <h3
//                 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
//               >
//                 Simple Watch
//               </h3>

//               <p className="mt-1 text-sm text-gray-700">$150</p>
//             </div>
//           </a>
//         </li>

//         <li>
//           <a href="#" className="group block">
//             <Image
//               src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
//               alt=""
//               className="aspect-square w-full rounded object-cover"
//             />

//             <div className="mt-3">
//               <h3
//                 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
//               >
//                 Simple Watch
//               </h3>

//               <p className="mt-1 text-sm text-gray-700">$150</p>
//             </div>
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>

//   )
// }

// export default Collection


// "use client";

// import { FootNav } from "@/assets/Navigation";
// import { message, Form, Input, Button } from "antd";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import MobileFoot from "./MobileFoot";
// import { FaAppStore } from "react-icons/fa";

// const Footer = () => {
//   const [form] = Form.useForm();
//   const [email, setEmail] = useState("");

//   const handleSubmit = () => {
//     message.success("Thanks for Subscribing to our Newsletter.");
//     form.resetFields();
//     setEmail("");
//   };

//   return (
//     <div className="w-full h-full sm:h-[800px] lg:h-[550px] relative overflow-hidden">
//       <div className="wave wave1"></div>
//       <div className="wave wave2"></div>
//       <div className="wave wave3"></div>
//       <div className="wave wave4"></div>
//       <Image
//         src="/images/foot.jpeg"
//         fill
//         alt="footImage"
//         className="w-full h-full object-cover hidden sm:block"
//       />
//       <div className="sm:text-white shadow-lg sm:top-0 sm:left-0 right-0 sm:absolute sm:bg-slate-950 w-full h-full sm:bg-opacity-90 bg-green-50 rounded-tr-3xl rounded-tl-3xl sm:rounded-none">
//         <div className="grid w-full grid-auto-fit-xs mx-auto max-w-7xl place-content-center py-8 sm:px-5 gap-y-6 gap-x-10">
//           <div className="px-3 sm:px-0  sm:col-span-2">
//             <h1 className="text-2xl pb-3">Groceries Store</h1>
//             <p className="text-base">
//               {" "}
//               Got questions? Send us a message on Whatsapp!- This number
//               supports only messages no calls. <br />{" "}
//               <a href="tel:0334786495">+233 33 478 6495</a>
//             </p>
//           </div>
//           {FootNav.map((foot) => (
//             <ul key={foot.id} className="hidden sm:block ">
//               <h1 className="text-lg font-semibold pb-2">{foot?.title}</h1>
//               {foot?.link.map((item, index) => (
//                 <li
//                   key={index}
//                   className="hover:underline hover:text-green-600 py-1 transition-all ease-in"
//                 >
//                   <Link href={item?.path}>{item?.display}</Link>
//                 </li>
//               ))}
//             </ul>
//           ))}
//           <div className=" sm:hidden">
//             {FootNav.map((foot) => (
//               <MobileFoot key={foot.id} foot={foot} />
//             ))}
//           </div>
//           <div className="px-4 sm:px-0 text-lg sm:text-base">
//             <h1 className="text-lg font-semibold pb-3">Contact Us</h1>
//             <div className="grid gap-y-2">
//               <a href="tel:+233334786495">+233 33 478 6495</a>
//               <a href="mailto:Info@Groceries-Store">Info@Groceries-Store</a>
//               <p>Airport - Kumasi, Ghana</p>
//               <p>Prempeh II Street - Adum</p>
//             </div>
//           </div>
//           <div className="px-4 sm:px-0">
//             <h1 className="text-lg font-semibold pb-3">Follow Us</h1>d
//           </div>
//           <div className="px-4 sm:px-0">
//             <h1 className="text-lg font-semibold pb-3">Download Our App</h1>
//             <div className=" ">
//               {/* <Image
//               src="/SVG/download1.png"
//               width={220}
//               height={220}
//               alt="playStore"
//               className="object-contain border-2"
//             />
//             <Image
//               src="/SVG/download2.jpg"
//               width={220}
//               height={220}
//               alt="playStore"
//               className="object-contain border-2"
//             /> */}
//               <div className="flex gap-2 items-center flex-wrap w-full">
//                 <button className="flex gap-2 bg-black  sm:bg-white sm:text-black rounded-md text-white px-2 sm:pr-3.5 py-1 items-center">
//                   <FaAppStore className="w-9 h-9" />
//                   <p className="text-xs grid place-items-start font-semibold">
//                     GET IT ON
//                     <span className="text-lg">Google Play</span>
//                   </p>
//                 </button>
//                 <button className="flex gap-2 bg-black sm:bg-white sm:text-black rounded-md text-white px-2 py-1 items-center">
//                   <FaAppStore className="w-9 h-9" />
//                   <p className="text-sm grid place-items-start font-semibold">
//                     Download on the
//                     <span className="text-lg">App Store</span>
//                   </p>
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="px-4 sm:px-0 sm:col-span-2 sm:mr-6">
//             <h1 className="text-lg font-semibold">Subscribe Now!</h1>
//             <p className="text-sm py-2">
//               Subcribe to our newsletter and get a discount when checking out
//             </p>
//             <Form
//               onFinish={handleSubmit}
//               form={form}
//               className="sm:flex w-full gap-1"
//             >
//               <Form.Item
//                 name="email"
//                 className="text-lg w-full"
//                 rules={[
//                   { required: true, message: "Please Enter Email" },
//                   { type: "email" },
//                 ]}
//                 hasFeedback
//               >
//                 <Input
//                   name="email"
//                   type="email"
//                   placeholder="myname@gmail.com"
//                   value={email}
//                   className="h-11 text-lg w-full border-2"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="font-semibold bg-red-600 h-11 text-lg"
//               >
//                 SUBSCRIBE
//               </Button>
//             </Form>
//           </div>
//         </div>
//         <div className="py-4">
//           <h6 className="sm:bg-white bg-black w-full h-1"></h6>
//           <div className="py-4 text-center">
//             <p className="text-lg pb-2">
//               Copyright &copy; 2024 All Rights Reserved
//             </p>
//             <h1 className="font-semibold">Developed By: Fuseini Abdul Wahab</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
