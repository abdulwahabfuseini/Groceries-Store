"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-6">
          <Image
            src="/images/mango.jpg"
            alt="loading"
            width={150}
            height={150}
            draggable="false"
            className=" object-contain"
          />
          <h1 className="text-xl">Please Wait...</h1>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Loading;
