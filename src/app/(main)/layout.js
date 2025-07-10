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
  title: "Joe Paton: Software Developer",
  description: "Passionate software engineer with 9+ years programming experience. View portfolio, achievements and contact info",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full min-h-screen">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen overflow-auto`}>
        <div className="w-full min-h-screen bg-[#1F1F1F] flex flex-col">
          <Header/>
          {children}
        </div>
      </body>
    </html>
  );
}
