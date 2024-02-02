"use client";

import { useState } from "react";
import { Button, Card, Form, Input,Steps } from "antd";
import toast from "react-hot-toast";
import Payment from "@/components/cart/Payment";

const Delivery = () => {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    street: "",
    postalAddress: "",
    zipCode: ""
  });

  const handleBilling = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/billing", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "content-Type": "application/json",
        },
        body: JSON.stringify(billingDetails),
      });

      if (response.ok) {
        toast.success("Billing Details Submitting successfully");
        setCurrent(current + 1);
      }
    } catch (error) {
      toast.error("Ooop!!! Failed to submit billing details");
    }
    setLoading(false);
  };

  const steps = [
    {
      title: "Billing Details",
    },
    {
      title: "Payment",
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <div className="w-full max-w-4xl mx-auto py-10 sm:py-14 bg-white sm:bg-gray-100">
      <Steps current={current} items={items} />
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <div>
          <h1 className="text-lg text-green-600 p-3">Provide your billing details for delivery</h1>
          <Card className="w-full shadow-none border-none sm:border sm:shadow rounded-none">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleBilling}
              initialValues={{ remember: true }}
            >
              <header className="text-xl pb-2 font-semibold text-green-600">
                Presonal Details
              </header>
              <div className="grid sm:grid-cols-2 gap-x-4">
                <Form.Item
                  name="fullName"
                  label="FullName"
                  className=" font-semibold text-base"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Full Name",
                    },
                    {
                      min: 8,
                      max: 30,
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Enter Full Name"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                    value={billingDetails.fullName}
                    onChange={(e) =>
                      setBillingDetails({
                        ...billingDetails,
                        fullName: e.target.value,
                      })
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
                    value={billingDetails.email}
                    onChange={(e) =>
                      setBillingDetails({
                        ...billingDetails,
                        email: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  label="Phone Number"
                  className=" font-semibold text-base"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Phone Number",
                    },
                    {
                      min: 10,
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                    value={billingDetails.phoneNumber}
                    onChange={(e) =>
                      setBillingDetails({
                        ...billingDetails,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                </Form.Item>
              </div>
              <header className="text-xl pb-2 font-semibold text-green-600">
                Billing Address
              </header>
              <div className="grid sm:grid-cols-2 gap-x-4">
                <Form.Item
                  name="city"
                  label="City"
                  className=" font-semibold text-base"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter City Name",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="text"
                    placeholder="Enter City Name"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                    value={billingDetails.city}
                    onChange={(e) =>
                      setBillingDetails({
                        ...billingDetails,
                        city: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="street"
                  label="Street"
                  className=" font-semibold text-base"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Street",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="text"
                    placeholder="Enter Street Name"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                    value={billingDetails.street}
                    onChange={(e) =>
                      setBillingDetails({
                        ...billingDetails,
                        street: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="postalAddress"
                  label="Postal Address"
                  className=" font-semibold text-base"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Postal Address",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="text"
                    placeholder="Enter Postal Address"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                    value={billingDetails.postalAddress}
                    onChange={(e) =>
                      setBillingDetails({
                        ...billingDetails,
                        postalAddress: e.target.value,
                      })
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="zipCode"
                  label="Zip Code"
                  className=" font-semibold text-base"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Zip Code",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="text"
                    placeholder="Enter Zip Code"
                    className="h-11 cursor-pointer w-full border-2 text-base"
                    value={billingDetails.zipCode}
                    onChange={(e) =>
                      setBillingDetails({
                        ...billingDetails,
                        zipCode: e.target.value,
                      })
                    }
                  />
                </Form.Item>
               
              </div>
              <Button
                disabled={loading}
                htmlType="submit"
                type="primary"
                className=" disabled:cursor-not-allowed h-11 bg-green-600 text-lg hover:ring-2 text-white font-semibold px-6"
              >
                {loading ? (
                  <button className="spinloader w-full">Submitting Details</button>
                ) : (
                  "Next"
                )}
              </Button>
            </Form>
          </Card>
        </div>
        )}
        {current === steps.length - 1 && (
          <Payment />
        )}
      </div>
    </div>
  );
};

export default Delivery;
