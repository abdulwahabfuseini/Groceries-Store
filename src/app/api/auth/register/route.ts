import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectMongoDB } from "@/libs/mongodb";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const body = await req.json();
  const { username, email, password } = body;
  console.log("🚀 ~ POST ~ password:", password);
  console.log("🚀 ~ POST ~ email:", email);
  console.log("🚀 ~ POST ~ username:", username);

  await connectMongoDB();

  try {
    if (!username || !email || !password) {
      throw new Error("Missing Fields");
    }

    const userExist = await User.findOne({
      email,
    });

    if (userExist) {
      throw new Error("Email already exists! Please use another email");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      emailVerified: new Date(),
      hashedPassword,
    });

    return NextResponse.json(
      { message: "User Created Successfully" },
      {
        status: 201,
        headers: {
          "content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error, Failed to create user" },
      { status: 500 }
    );
  }
};
