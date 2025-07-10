"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Anton } from "next/font/google";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const anton = Anton({subsets: ['latin'], weight: '400'})

const SECTIONS = ["about", "projects", "achievements", "contact"]

export default function Header(){

    const pathname = usePathname()

    const router = useRouter()

    return (
        <div className={"w-full h-[10%] flex flex-row items-center justify-center py-2 fixed bg-[#1F1F1F] z-50 " + anton.className}>
            <IconCaretLeftFilled className="block sm:hidden text-white hover:cursor-pointer" onClick={() => router.push("/" + SECTIONS[(SECTIONS.indexOf(pathname.substring(1)) - 1) % SECTIONS.length])}/>
            <div className="flex flex-row gap-1 sm:gap-10 items-end">
                {SECTIONS.map((s) => {
                    return <Link key={s} href={s} className={"hover:cursor-pointer " + (("/" + s) == pathname ? `text-[#69B765] text-3xl md:text-5xl sm:text-4xl` : "text-white hidden sm:block sm:text-3xl md:text-4xl")}>{s.toUpperCase()}</Link>
                })}
            </div>
            <IconCaretRightFilled className="block sm:hidden text-white hover:cursor-pointer" onClick={() => router.push("/" + SECTIONS[(SECTIONS.indexOf(pathname.substring(1)) + 1) % SECTIONS.length])}/>
        </div>
    )

}
