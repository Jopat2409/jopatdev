"use client"
import { useEffect, useMemo, useState } from "react"
import Select from 'react-select'

import GameData from "@/data/mapdata.json"
import { IconAdjustments } from "@tabler/icons-react"

export default function AllTheMaps(){

    const dinos = useMemo(() => GameData["Dinos"].reduce((o, key) => ([ ...o, {value: key.toLowerCase().replace(" ", "_"), label: key}]), []))

    const [tab, setTab] = useState("creatures")

    const [selectedDino, setSelectedDino] = useState("")

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Or show a loader/skeleton


    return (
        <>
            <div className="hidden bg-[#1B2838] w-[15vw] h-[100vh] min-w-52 md:flex">
            </div>
            <div className="flex-1 bg-[#153238] opacity-90 border-4 border-[#395A63]">
                <div className="w-full h-full flex flex-col flex-wrap">
                    <div className="h-[5%] bg-[#0F232A] opacity-90 w-fit px-5 text-[#95E2F2] border-r-3 border-[#395A63] flex items-center justify-end">
                        The Center
                    </div>
                    <div className="flex-1 bg-[#0F232A] opacity-90 border-t-4 border-[#395A63] flex flex-col items-center p-[5%] lg:flex-row">
                        <div className="w-[95%] aspect-square bg-amber-50">
                        </div>
                        <div className="flex flex-row w-full justify-around mt-5 pb-5">
                            <button
                                className={`text-[#8FBDCD] font-light text-3xl cursor-pointer ${tab == "creatures" ? "opacity-100" : "opacity-50"}`}
                                onClick={() => setTab("creatures")}
                            >
                                CREATURES
                            </button>
                            <button
                                className={`text-[#8FBDCD] font-light text-3xl cursor-pointer ${tab == "resources" ? "opacity-100" : "opacity-50"}`}
                                onClick={() => setTab("resources")}
                            >
                                RESOURCES
                            </button>
                        </div>
                        <div className="relative w-80">
                            <Select
                                options={tab == "creatures" ? dinos : GameData["Resources"]}
                                value={selectedDino}
                                onChange={setSelectedDino}
                                isSearchable
                                styles ={{
                                    control: (base) => ({
                                        ...base,
                                        backgroundColor: "#2C6476",
                                        borderColor: "#34A0C8",
                                        borderRadius: 0,
                                        fontSize: "20px",
                                        boxShadow: "none",
                                        "&:hover": {
                                            borderColor: "#94a3b8",
                                        },
                                    singleValue: (base) => ({
                                        ...base,
                                        color: "#6FD3ED",
                                    }),
                                })}}
                                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                            />

                            {/* Custom Filter Icon */}
                            <div className="absolute right-2 top-2">
                                    <button className="p-1 rounded hover:bg-gray-200">
                                    <IconAdjustments size={18} />
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
