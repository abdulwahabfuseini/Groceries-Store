import { connectMongoDB } from "@/libs/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const body = await req.json();
  const { name, email, password } = body;
  console.log("🚀 ~ POST ~ name:", name);
  console.log("🚀 ~ POST ~ email:", email);
  console.log("🚀 ~ POST ~ password:", password);
  try {
    await connectMongoDB();

    // Validate the input (you can use a validation library like Joi)
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 405 });
    }

    // Check if Email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists!, Please use another email" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", data: newUser },
      { status: 201, headers: {
        "content-Type": "application/json"
      } }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Server error! Failed To create user" },
      { status: 500 }
    );
  }
};
