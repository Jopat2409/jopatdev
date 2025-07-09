"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Anton } from "next/font/google";

const anton = Anton({subsets: ['latin'], weight: '400'})

export default function Header(){
    const SECTIONS = ["about", "projects", "achievements", "contact"]

    const pathname = usePathname()

    return (
        <div className={"w-full h-[10%] flex flex-row items-end justify-between px-100 py-2 " + anton.className}>
            {SECTIONS.map((s) => {
                return <Link key={s} href={s} className={"hover:cursor-pointer " + (("/" + s) == pathname ? `text-[#69B765] text-5xl` : "text-white hidden sm:block text-4xl")}>{s.toUpperCase()}</Link>
            })}
        </div>
    )

}
