import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { username, email, password } = body;
  try {
    if (!username || !email || !password) {
      throw new Error("Missing Fields");
    }

    const userExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExist) {
      throw new Error("Email already exist! Please use another email");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        emailVerified: new Date(),
        hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User Created Successfully", data: user },
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
