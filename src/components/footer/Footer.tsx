"use client";

import { FootNav } from "@/assets/Navigation";
import { message, Form, Input, Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileFoot from "./MobileFoot";
import { FaAppStore } from "react-icons/fa";

const Footer = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    message.success("Thanks for Subscribing to our Newsletter.");
    form.resetFields();
    setEmail("");
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-green-100">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>

      <div>
        <div className="grid w-full grid-auto-fit-xs mx-auto max-w-7xl place-content-center py-8 sm:px-5 gap-y-6 gap-x-10">
          <div className="px-3 sm:px-0  sm:col-span-2">
            <h1 className="text-2xl pb-3">Groceries Store</h1>
            <p className="text-base">
              {" "}
              Got questions? Send us a message on Whatsapp!- This number
              supports only messages no calls. <br />{" "}
              <a href="tel:0334786495">+233 33 478 6495</a>
            </p>
          </div>
          {FootNav.map((foot) => (
            <ul key={foot.id} className="hidden sm:block ">
              <h1 className="text-lg font-semibold pb-2">{foot?.title}</h1>
              {foot?.link.map((item, index) => (
                <li
                  key={index}
                  className="hover:underline hover:text-green-600 py-1 transition-all ease-in"
                >
                  <Link href={item?.path}>{item?.display}</Link>
                </li>
              ))}
            </ul>
          ))}
          <div className=" sm:hidden">
            {FootNav.map((foot) => (
              <MobileFoot key={foot.id} foot={foot} />
            ))}
          </div>
          <div className="px-4 sm:px-0 text-lg sm:text-base">
            <h1 className="text-lg font-semibold pb-3">Contact Us</h1>
            <div className="grid gap-y-2">
              <a href="tel:+233334786495">+233 33 478 6495</a>
              <a href="mailto:Info@Groceries-Store">Info@Groceries-Store</a>
              <p>Airport - Kumasi, Ghana</p>
              <p>Prempeh II Street - Adum</p>
            </div>
          </div>
          <div className="px-4 sm:px-0">
            <h1 className="text-lg font-semibold pb-3">Follow Us</h1>d
          </div>
          <div className="px-4 sm:px-0">
            <h1 className="text-lg font-semibold pb-3">Download Our App</h1>
            <div className=" ">
              <div className="flex gap-2 items-center flex-wrap w-full">
                <button className="flex gap-2 bg-black  sm:bg-white sm:text-black rounded-md text-white px-2 pr-4 py-1 items-center">
                  <FaAppStore className="w-9 h-9" />
                  <p className="text-xs grid place-items-start font-semibold">
                    GET IT ON
                    <span className="text-lg">Google Play</span>
                  </p>
                </button>
                <button className="flex gap-2 bg-black sm:bg-white sm:text-black rounded-md text-white px-2 py-1 items-center">
                  <FaAppStore className="w-9 h-9" />
                  <p className="text-sm grid place-items-start font-semibold">
                    Download on the
                    <span className="text-lg">App Store</span>
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-0 sm:col-span-2 sm:mr-6">
            <h1 className="text-lg font-semibold">Subscribe Now!</h1>
            <p className="text-sm py-2">
              Subcribe to our newsletter and get a discount when checking out
            </p>
            <Form
              onFinish={handleSubmit}
              form={form}
              className="sm:flex w-full gap-1"
            >
              <Form.Item
                name="email"
                className="text-lg w-full"
                rules={[
                  { required: true, message: "Please Enter Email" },
                  { type: "email" },
                ]}
                hasFeedback
              >
                <Input
                  name="email"
                  type="email"
                  placeholder="myname@gmail.com"
                  value={email}
                  className="h-11 text-lg w-full border-2"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="font-semibold bg-red-600 h-11 text-lg"
              >
                SUBSCRIBE
              </Button>
            </Form>
          </div>
        </div>
        <div className="py-4">
          <h6 className="sm:bg-white bg-black w-full h-1"></h6>
          <div className="py-4 text-center">
            <p className="text-lg pb-2">
              Copyright &copy; 2024 All Rights Reserved
            </p>
            <h1 className="font-semibold">Developed By: Fuseini Abdul Wahab</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
