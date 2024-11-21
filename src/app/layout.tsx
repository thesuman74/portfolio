import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Provider from "@/components/HOC/Providers";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Suman Adhikari",
  description: "👋Welcome to My Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased `}>
        <Provider>
          <div className=" flex flex-col">
            <Header />
            <div className="flex-grow font-primary ">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
