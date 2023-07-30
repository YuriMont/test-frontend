import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/redux/features/Provide";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`overflow-x-hidden text-gray-200 bg-zinc-900 ${inter.className}`}
      >
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}