"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Card, Form, Input } from "antd";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi2";
import { BsEnvelopeAt } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import Design from "@/components/account/Design";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const router = useRouter();
  const [form] = Form.useForm();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      // if (!response.ok) {
      //   setErrors("Email already exist! Please Use another email");
      //   toast.error("Email already exist! Please Use another email");
      // }

      if (response.ok) {
        toast.success("Logged in successfully");
        router.push("/signin");
      }
    } catch (error) {
      toast.error("Ooop!!! Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <Card className="w-full sm:shadow rounded-none bg-slate-100 sm:bg-white">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleRegister}
        initialValues={{ remember: true }}
      >
        <header className="text-xl pb-2 font-semibold text-center sm:hidden">
          New Here! <br /> Create an account
        </header>

        <span className="text-red-600 text-lg">{errors}</span>
        <Form.Item
          name="username"
          label="Username"
          className=" font-semibold text-base"
          rules={[
            {
              required: true,
              message: "Please Enter Username",
            },
            {
              min: 8,
              max: 30,
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<HiOutlineUser />}
            type="username"
            placeholder="Enter Username"
            className="h-11 cursor-pointer w-full border-2 text-base"
            value={userDetails.username}
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          className=" font-semibold text-base"
          rules={[
            {
              required: true,
              message: "Please Enter Email",
            },
            { type: "email" },
          ]}
          hasFeedback
        >
          <Input
            prefix={<BsEnvelopeAt />}
            type="email"
            placeholder="myname@gmail.com"
            className="h-11 cursor-pointer w-full border-2 text-base"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          className=" font-semibold text-base"
          rules={[
            {
              required: true,
              message: "Please Enter Password",
            },
            {
              min: 6,
              max: 12,
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<CiLock />}
            type="password"
            placeholder="Enter Password"
            className="h-11 cursor-pointer w-full border-2 text-base"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="ConfirmPassword"
          className=" font-semibold text-base"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please Confirm Password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Password don't match");
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<CiLock />}
            type="password"
            placeholder="Confirm Password"
            className="h-11 cursor-pointer w-full border-2 text-base"
          />
        </Form.Item>
        <Button
          disabled={loading}
          htmlType="submit"
          type="primary"
          className=" disabled:cursor-not-allowed bg-blue-600 text-lg w-full h-10 hover:ring-2 hover:bg-black text-white font-semibold"
        >
          {loading ? (
            <span className="spinloader">Creating Account</span>
          ) : (
            "Create  Account"
          )}
        </Button>
      </Form>
      <Link href="/signin">
        <h6 className="hover:underline text-center pt-3 text-lg hover:text-green-600 sm:hidden">
          {" "}
          Already have an account! Sign In
        </h6>
      </Link>
    </Card>
  );
};

export default Register;
