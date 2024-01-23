import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastContext from "@/contexts/ToastContext";
import { ShoppingCartProvider } from "@/contexts/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Groceries Store",
  description: "Welcome to our Groceries Store",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <ShoppingCartProvider>
          <ToastContext />
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
