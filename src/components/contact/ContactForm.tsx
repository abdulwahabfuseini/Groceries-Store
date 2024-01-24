"use client";

import { Button, Form, Input } from "antd";
import emailjs from "@emailjs/browser";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setContact({ ...contact, [name]: value });
  // };

  const handleSubmit = () => {
    setLoading(true);
    emailjs
      .send(
        "service_hc4os5t",
        "template_mnp1bqq",
        {
          fullName: contact.fullName,
          email: contact.email,
          phoneNumber: contact.phoneNumber,
          message: contact.message,
        },
        "9vSC2INYrwofrkKDo"
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thanks for contacting ManDem Accessories, we will get black to you as soon as possible. Stay Bless!!!"
          );
          setContact({
            fullName: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
          form.resetFields();
        },
        (error) => {
          setLoading(false);
          toast.error("oops!!! Something went wrong! Please check your internet connection");
        }
      );
  };

  return (
    <Form onFinish={handleSubmit} form={form} className="py-6">
      <Form.Item
        name="fullName"
        className="text-lg font-semibold"
        rules={[
          { required: true, message: "Please Enter Full Name" },
          { min: 8, max: 30 },
        ]}
        hasFeedback
      >
        <Input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          className="h-12 px-5 text-lg border-2 rounded-lg lg:rounded-xl border-slate-600"
          onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        name="email"
        className="text-lg font-semibold"
        rules={[
          { required: true, message: "Please Enter Email" },
          { type: "email" },
        ]}
        hasFeedback
      >
        <Input
          type="email"
          name="email"
          placeholder="Eg: myname@gmail.com"
          className="h-12 px-5 text-lg border-2 rounded-lg lg:rounded-xl border-slate-600"
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        className="text-lg font-semibold"
        rules={[
          { required: true, message: "Please Enter Phone Number" },
          { min: 10 },
        ]}
        hasFeedback
      >
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="(000) 000 000 0000"
          className="h-12 px-5 text-lg border-2 rounded-lg lg:rounded-xl border-slate-600"
          onChange={(e) =>
            setContact({ ...contact, phoneNumber: e.target.value })
          }
        />
      </Form.Item>

      <Form.Item
        name="message"
        className="text-lg font-semibold"
        rules={[
          { required: true, message: "Please Enter Message" },
          { min: 20, max: 100 },
        ]}
      >
        <TextArea
          name="message"
          placeholder="Enter Message"
          className="p-5 text-lg border-2 border-slate-600"
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
        />
      </Form.Item>
      <Button
        htmlType="submit"
        type="primary"
        className="mt-2 text-xl text-white bg-green-600 h-12 w-full font-semibold hover:shadow-md"
      >
        {loading ? <h1>Sending...</h1> : "Submit"}
      </Button>
    </Form>
  );
};

export default ContactForm;
