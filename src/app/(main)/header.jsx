"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"

export default function Header(){
    const SECTIONS = ["about", "projects", "achievements", "contact"]

    const pathname = usePathname()

    return (
        <div className="w-full h-[10%] flex flex-row items-center justify-around">
            {SECTIONS.map((s) => {
                return <Link key={s} href={s} className={"hover:cursor-pointer " + (("/" + s) == pathname ? `text-[#69B765]` : "text-white hidden sm:block")}>{s.toUpperCase()}</Link>
            })}
        </div>
    )

}
