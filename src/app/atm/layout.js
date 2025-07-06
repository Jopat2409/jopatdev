
import { Anton } from "next/font/google";

const anton = Anton({subsets: ['latin'], weight: '400'})

export default function ATMLayout({children}){

    return (
        <div className={"flex flex-row w-screen h-screen " + anton.className}>
            {children}
        </div>
    )
}
