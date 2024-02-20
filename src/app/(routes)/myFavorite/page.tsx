"use client";

import FavoriteCard from "@/components/FavoriteCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteActions, selectFavoriteItems } from "@/Store/FavoritesSlice";
import { TbChevronLeft } from "react-icons/tb";
import Link from "next/link";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { Button, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const MyFavorite = () => {
  const FavoriteGroceries = useSelector(selectFavoriteItems);
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  const clearFavorite = () => {
    dispatch(FavoriteActions.clearFavorites());
    toast.success("Favorite Cart Cleared Successfully");
  };

  const cancel = () => {
    toast.error("You Clicked on No");
  };


  return (
    <div className="max-w-7xl mx-auto py-10 lg:py-12 px-3 sm:px-5">
      <Link href="/category">
        <button className=" p-2 font-semibold  text-center mb-7 bg-white rounded-full text">
          <TbChevronLeft className="w-8 h-8" />
        </button>
      </Link>
      <div>
        {FavoriteGroceries?.length === 0 ? (
          <div className="flex items-center justify-center flex-col py-12">
            <h1 className="text-xl sm:text-2xl font-semibold">
              {session?.user?.name},{" "}
              <span className="text-lg sm:text-xl font-medium">
                Your Favorite is Empty
              </span>
            </h1>
            <Button
              onClick={() => router.push("/category")}
              type="primary"
              className="h-12 text-lg my-8 bg-blue-600"
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <h1 className="text-xl font-semibold pb-2">
              {session?.user?.name},
            </h1>
            <header className="flex items-center justify-between flex-wrap gap-y-2">
              <h1 className="text-lg font-medium sm:text-2xl">
                Your Favourite Groceries
              </h1>
              
              <Popconfirm
              title="Clear Your Favorite Cart"
              description={`${session?.user?.name}, Are you sure want to clear your cart?`}
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: "red",
                  }}
                />
              }
              onConfirm={clearFavorite}
              onCancel={cancel}
              color="#F1E6E6"
              okText="Confirm"
              cancelText="Cancel"
            >
              <Button
                danger
                type="primary"
                className="h-12 mb-2 text-lg border-2 rounded-lg bg-red-600"
              >
                Clear Cart
              </Button>
            </Popconfirm>
            </header>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 py-10">
              {FavoriteGroceries.map((favorite) => (
                <FavoriteCard
                  key={favorite.id}
                  id={favorite.id}
                  name={favorite.name}
                  image={favorite.image}
                  price={favorite.price}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyFavorite;
