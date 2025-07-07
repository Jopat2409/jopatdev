"use client"
import { useEffect, useMemo, useState } from "react"
import Select from 'react-select'

import GameData from "@/data/mapdata.json"
import { IconAdjustments, IconCaretDown, IconCaretDownFilled } from "@tabler/icons-react"
import dynamic from "next/dynamic"

const LazyMap = dynamic(() => import("@/components/Map"), {
    ssr: false,
});

export default function AllTheMaps(){

    const dinos = useMemo(() => GameData["Dinos"].reduce((o, key) => ([ ...o, {value: key.toLowerCase().replace(" ", "_"), label: key}]), []))

    const [map, setMap] = useState({value: "the_center", label: "The Center"})

    const [tab, setTab] = useState("creatures")

    const [selectedDino, setSelectedDino] = useState("")
    const [opened, setOpened] = useState(false)

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Or show a loader/skeleton


    return (
        <>
            <div className="hidden bg-[#1B2838] w-[15vw] h-[100vh] min-w-52 md:flex">
            </div>
            <div className="flex-1 bg-[#0F232A] opacity-90 border-1 border-[#395A63]">
                <div className="w-full h-full flex flex-col flex-wrap items-center">
                    <Select
                        placeholder="Select Map"
                        value={map}
                        onChange={setMap}
                        isSearchable={false}
                        styles={{
                            container: (base) => ({
                                ...base,
                                width: "fit-content",
                                padding: 0,
                            }),
                            singleValueContainer: (base) => ({
                                ...base,
                                padding: 0
                            }),
                            control: (base) => ({
                                ...base,
                                backgroundColor: "none",
                                border: "none",
                                padding: 0,
                                boxShadow: 'none'
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: "#8FBDCD",
                                fontSize: "1.875rem",
                                margin: 0
                            }),
                            input: (base) => ({
                                ...base,
                                color: "#8FBDCD",
                            }),
                            dropdownIndicator: (base) => ({
                                ...base,
                                padding: 0,
                                color: "#8FBDCD"
                            })
                        }}
                        components={{ IndicatorSeparator: () => null, DropdownIndicator: () => <IconCaretDownFilled color="#8FBDCD"/> }}
                    />
                    <div className="flex-1 w-[95%] opacity-90 flex flex-col items-center lg:flex-row">
                        <div className="w-full aspect-square">
                            <LazyMap map={map.label} currentDino={selectedDino.label}/>
                        </div>
                        <div className="flex flex-row w-full justify-around my-2.5">
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
                                placeholder={"Select creature"}
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
                                        fontFamily: "arial",
                                        boxShadow: "none",
                                        "&:hover": {
                                            borderColor: "#78DEFA",
                                            backgroundColor: "#426570"
                                        }}),
                                    singleValue: (base) => ({
                                        ...base,
                                        color: "#6FD3ED",
                                    }),
                                    input: (base) => ({
                                        ...base,
                                        color: "#6FD3ED",
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        borderWidth: 1,
                                        backgroundColor: "#2C6476",
                                        borderColor: "#34A0C8",
                                        borderRadius: 0,
                                    }),
                                    option: (base, state) => ({
                                        ...base,
                                        backgroundColor: state.isSelected ? "#DDA100" : state.isFocused ? '#3E7B91' : "none",
                                        borderWidth: state.isSelected ? 1 : 0,
                                        borderStyle: "dashed",
                                        borderColor: "#D98100",
                                        color: state.isSelected ? "#7AE4FD" : "#6FD3ED",
                                        paddingTop: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        fontFamily: "arial"
                                    }),
                                }}
                                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                            />

                            {/* Custom Filter Icon */}
                            <div className="absolute right-1 top-1">
                                <button className="p-1 rounded hover:bg-gray-200 hover:cursor-pointer">
                                    <IconAdjustments size={28} color="#6FD3ED" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
