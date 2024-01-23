import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// ==== GET SINGLE POST ====
export const GET = async (req: NextRequest, { params: { id } }: any) => {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) {
      return NextResponse.json({ message: "Post Not Found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Single Post", data: post },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get post" },
      { status: 500 }
    );
  }
};

// ==== UPDATE POSTS ====

export const PUT = async (req: NextRequest, { params: { id } }: any) => {
  const body = await req.json();
  const {
    newFullname: fullname,
    newEmail: email,
    newDescription: description,
  } = body;

  try {
    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: { fullname, email, description },
    });

    if (!updatePost) {
      return NextResponse.json({ message: "Post Not Found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Post Updated", data: updatePost },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update Post" },
      { status: 500 }
    );
  }
};



export const DELETE = async (req: NextRequest, {params: {id}}: any) => {
    try {
        const deletePost = await prisma.post.delete({
            where: {
                id
            }
        })
        if (!deletePost) {
            return NextResponse.json({ message: "Post Not Found" }, { status: 404 });
          }
          return NextResponse.json(
            { message: "Post Deleted", data: deletePost },
            { status: 201 }
          );
        } catch (error) {
          return NextResponse.json(
            { message: "Failed to Delete Post" },
            { status: 500 }
          );
        }
}