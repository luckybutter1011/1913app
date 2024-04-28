import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import ToastProvider from "@/components/context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1913$",
  description: "The 1913$ is a new Stable coin that is inflation resistant. It goes up in value based on the CPI data for inflation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background font-serif">
        <NextUIProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
