

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Card, Form, Input } from "antd";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";

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
      router.push("/");
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
    <div className="mx-auto max-w-7xl w-full grid place-content-center px-4 h-screen">
     <Card className="w-full sm:w-[390px]">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleLogin}
          initialValues={{ remember: true }}
        >
          <header className="text-lg pb-2 font-semibold text-center">
            Welcome Back! 
             Signin to your account
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
              type="password"
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
            {loading ? "Processing..." : "Login With Email"}
          </Button>
        </Form>
        <div className="flex items-center gap-2 py-3">
          <span className="w-full h-[0.5px] bg-gray-200"></span>
          <p className="text-lg font-semibold">Or</p>
          <span className="w-full h-[0.5px] bg-gray-200"></span>
        </div>
       <div className="grid gap-y-3">
       <button onClick={() => signIn("google")} className="flex items-center justify-center w-full p-2 bg-red-400 text-white text-lg font-semibold rounded-md">
          <span>Signin With Google</span>
        </button>
        <button  onClick={() => signIn("github")}  className="flex items-center justify-center w-full p-2 bg-gray-700 text-white text-lg font-semibold rounded-md">
          <span>Signin With Github</span>
        </button>
       </div>
      </Card>
      <Link href="/signup" className=" hover:underline text-center pt-2 hover:text-green-600">
        Don&apos;t have an account! Sign Up
      </Link>
    </div>
  );
};

export default Login;
