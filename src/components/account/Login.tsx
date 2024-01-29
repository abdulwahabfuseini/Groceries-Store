"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Card, Form, Input } from "antd";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { BsEnvelopeAt } from "react-icons/bs";
import { CiLock } from "react-icons/ci";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const router = useRouter();
  const session = useSession();
  const [form] = Form.useForm();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/category");
    }
  });

  const handleLogin = async () => {
    setLoading(true);
    signIn("credentials", { ...userDetails, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback.error);
          setErrors(callback.error);
        }
        if (callback?.ok || !callback?.error) {
          toast.success("Logged In Successfully");
        }
        setLoading(false);
      })
      .catch(() => {
        toast.error("Oooops!!! Failed to Login");
      });
  };

  return (
    <Card className="w-full shadow-none border-none sm:border sm:shadow rounded-none bg-white">
      <Form
        form={form}
        layout="vertical"
        onFinish={handleLogin}
        initialValues={{ remember: true }}
      >
        <header className="text-xl pb-2 font-semibold text-center sm:hidden">
          Welcome Back! <br /> Signin to your account
        </header>
        <span className="text-red-600 text-lg">{errors}</span>
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
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<CiLock />}
            type="password"
            name="password"
            placeholder="Enter Password"
            className="h-11 cursor-pointer w-full border-2 text-base"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
        </Form.Item>
        <Button
          disabled={loading}
          htmlType="submit"
          type="primary"
          className=" disabled:cursor-not-allowed bg-green-400 text-lg w-full h-10 hover:ring-2 text-white font-semibold"
        >
          {loading ? (
            <span className="spinloader">Processing</span>
          ) : (
            "Signin with Email"
          )}
        </Button>
      </Form>
      <div className="flex items-center gap-2 py-4">
        <span className="w-full h-[0.5px] bg-gray-200"></span>
        <p className="text-lg font-medium">Or</p>
        <span className="w-full h-[0.5px] bg-gray-200"></span>
      </div>
      <div className="grid gap-y-3">
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center w-full p-2 bg-blue-600 text-white text-lg font-semibold rounded-md"
        >
          <span>Signin with Google</span>
        </button>
        <button
          onClick={() => signIn("github")}
          className="flex items-center justify-center w-full p-2 bg-gray-700 text-white text-lg font-semibold rounded-md"
        >
          <span>Signin with Github</span>
        </button>
      </div>
      <Link href="/signup">
        <h6 className=" hover:underline text-center pt-3 text-lg hover:text-green-600 sm:hidden">
          {" "}
          Don&apos;t have an account? Sign Up
        </h6>
      </Link>
    </Card>
  );
};

export default Login;
