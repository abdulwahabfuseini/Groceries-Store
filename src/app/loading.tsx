"use client";

import { useEffect, useState } from "react";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center w-full h-screen gap-14">
          <span className="spin "></span>
          <h1 className="text-xl spinloader">Loading</h1>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Loading;
