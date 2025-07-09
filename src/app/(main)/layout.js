import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "./header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Joe Paton",
  description: "Joe Paton personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full`}>
        <div className="w-full h-full bg-[#1F1F1F] flex flex-col">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
