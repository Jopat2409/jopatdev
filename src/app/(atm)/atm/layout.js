import "@/app/globals.css";

export const metadata = {
  title: "AllTheMaps",
  description: "AllTheMaps spawn map",
};
import { Anton } from "next/font/google";

const anton = Anton({subsets: ['latin'], weight: '400'})

export default function ATMLayout({children}){

    return (
        <html lang="en">
            <body className={`antialiased`}>
                <div className={"flex flex-row w-screen h-screen bg-[url(/turtle.png)] " + anton.className}>
                    {children}
                </div>
            </body>
        </html>

    )
}
