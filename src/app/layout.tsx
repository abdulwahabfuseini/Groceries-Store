import { Inter } from "next/font/google";
import "./globals.css";
import ToastContext from "@/contexts/ToastContext";
import Providers from "@/contexts/Providers";
import Head from "next/head";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Groceries Store",
  description: "Welcome to our Groceries Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <body
        className={`${inter.className} bg-gray-100 overflow-x-hidden w-full h-full`}
      >
        <Providers>
          <ToastContext />
          <Loading>{children}</Loading>
        </Providers>
      </body>
    </html>
  );
}
