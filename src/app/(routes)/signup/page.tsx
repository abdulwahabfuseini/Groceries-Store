"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Card, Form, Input } from "antd";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";

const Signup = () => {
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
    <div className="mx-auto max-w-7xl w-full grid place-content-center px-4 h-screen">
      <Card className="w-full sm:w-[390px]">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleRegister}
          initialValues={{ remember: true }}
        >
          <header className="text-lg pb-2 font-semibold text-center">
            New Here! Create an account
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
            {loading ? "Processing..." : "Create  Account"}
          </Button>
        </Form>
      </Card>
      <Link
        href="/signin"
        className=" hover:underline text-center pt-2 hover:text-green-600"
      >
        Already have an account Sign In
      </Link>
    </div>
  );
};

export default Signup;
