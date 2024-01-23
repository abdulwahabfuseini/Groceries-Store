import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// ===== CREATE POST =====
export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const { fullname, email, description } =
    body;

  try {
    const posts = await prisma.post.create({
      data: {
        fullname,
        email,
        description
      },
    });

    return NextResponse.json(
      { message: "Posts Created", data: posts },
      {
        status: 201,
        headers: {
          "content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create post" },
      { status: 500 }
    );
  }
};

// ===== GET POST ====

export const GET = async (req: NextRequest) => {
  try {
    const posts = await prisma.post.findMany();

    if (!posts) {
      return NextResponse.json({ message: "Posts not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "All Posts", data: posts },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get posts" },
      { status: 500 }
    );
  }
};
