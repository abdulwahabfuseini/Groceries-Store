"use client";

import FavoriteCard from "@/components/FavoriteCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FavoriteActions, selectFavoriteItems } from "@/Store/FavoritesSlice";
import { TbChevronLeft } from "react-icons/tb";
import Link from "next/link";
import toast from "react-hot-toast";

const MyFavorite = () => {
  const FavoriteGroceries = useSelector(selectFavoriteItems);
  const dispatch = useDispatch();

  const clearFavorite = () => {
    dispatch(FavoriteActions.clearFavorites())
    toast.success("Favorite Cleared Successfully")
  }

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
            <h1 className="text-xl sm:text-3xl">Your Favorite is Empty</h1>
          </div>
        ) : (
          <>
            <header className="flex items-center justify-between">
              <h1 className="text-xl font-semibold sm:text-2xl">Favourite Groceries</h1>
              <button onClick={clearFavorite} className="bg-red-600 text-white font-semibold rounded-lg py-1.5 px-2">Delete All</button>
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
