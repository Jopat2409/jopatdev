"use client"
import Data from "@/data/personal.json"
import { useState } from "react";
import LinkIcon from "./linkicon";

export default function Projects(){

    const PROJECTS = Data["projects"]

    const [currentProject, setCurrentProject] = useState(PROJECTS[0]);

    return (
        <div className="flex flex-grow justify-center">
            <div className="hidden sm:flex flex-row w-full mx-2 h-full mb-2">
                <div className="h-full w-[20%] min-w-60 bg-[#262626] flex flex-col items-end py-50 justify-around text-white text-3xl">
                    {PROJECTS.map((p, i) => <button key={p.name} onClick={() => setCurrentProject(PROJECTS[i])} className={"text-end w-full px-3 py-5 hover:bg-[#202020] hover:cursor-pointer" + (p.name == currentProject.name ? " border-l-[#59D98E] border-l-5" : "")}>{p.name}</button>)}
                </div>
                <div className="flex w-[80%] bg-[#2a2a2a] flex-col flex-wrap p-5">
                    <div className="flex flex-row min-h-[12.5%] w-full items-end">
                        <div className="h-full grow bg-[#313131] border-[#6D6D6D] border-1 rounded-sm m-1 truncate p-3 flex flex-col items-center justify-end text-white">
                            <h1 className="text-4xl overflow-hidden w-fit h-fit">{currentProject.name}</h1>
                            <h3 className="text-md overflow-hidden w-fit h-fit opacity-45">{currentProject.description}</h3>
                        </div>
                        <div className="w-[15%] max-w-[100px] bg-[#313131] border-[#6D6D6D] border-1 rounded-sm m-1 h-full text-white p-1 flex flex-col">
                            {Object.keys(currentProject.links).map((l) => <LinkIcon type={l} src={currentProject.links[l]}/>)}
                        </div>
                    </div>
                    <div className="grow flex flex-row flex-wrap sm:flex-nowrap justify-around">
                        <div className="flex flex-col w-[100%] sm:w-[55%] h-full m-1">
                            <div className={`max-w-[100%] max-h-[60%] h-[60%] w-[100%] rounded-sm mb-1 border-1 border-[#6D6D6D] bg-cover bg-top-left`} style={{ backgroundImage: `url(/${currentProject.cover1})`}}/>
                            <div className="grow bg-[#313131] border-[#6D6D6D] border-1 rounded-sm mt-1 text-[1.25em] text-white p-3 overflow-hidden">
                                {currentProject.long1 || "Info soon!"}
                            </div>
                        </div>
                        <div className="flex flex-col w-[100%] sm:w-[45%] sm:max-w-[45%] h-full m-1">
                            <div className="grow bg-[#313131] border-[#6D6D6D] border-1 rounded-sm mb-1 text-xl text-white p-3 overflow-hidden">
                                {currentProject.long2 || "Info soon!"}
                            </div>
                            <div className={`max-w-[100%] max-h-[45%] h-[45%] w-[100%] rounded-sm mt-1 border-1 border-[#6D6D6D] bg-cover bg-top`} style={{ backgroundImage: `url(/${currentProject.cover2})`}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex sm:hidden text-white items-center">
                Responsive mobile design coming in like 2 days!
            </div>
        </div>
    )
}
