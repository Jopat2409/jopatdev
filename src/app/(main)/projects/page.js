"use client"
import Data from "@/data/personal.json"
import { useState } from "react";
import LinkIcon from "./linkicon";
import { Anton } from "next/font/google";
import ProjectCard from "./projectcard";

const anton = Anton({subsets: ['latin'], weight: '400'})

export default function Projects(){

    const PROJECTS = Data["projects"]

    const [currentProject, setCurrentProject] = useState(PROJECTS[0]);

    return (
        <div className="flex justify-center mt-[10vh] min-h-[90vh] w-full flex-col items-center">
            <div className="hidden sm:flex flex-row w-[95%] mx-2 min-h-[85vh] mb-2 overflow-y-auto">
                <div className="w-[20%] min-w-60 bg-[#262626] flex flex-col items-end justify-around text-white text-3xl fixed " style={{minHeight: "85vh"}}>
                    {PROJECTS.map((p, i) => <button key={p.name} onClick={() => setCurrentProject(PROJECTS[i])} className={"text-end w-full px-3 py-5 hover:bg-[#202020] hover:cursor-pointer" + (p.name == currentProject.name ? " border-l-[#59D98E] border-l-5" : "")}>{p.name}</button>)}
                </div>
                <div className="flex w-[80%] bg-[#2a2a2a] flex-col flex-wrap p-5 min gap-1 min-h-[85vh]" style={{ marginLeft: `max(calc(var(--spacing) * 60), 20%)`}}>
                    <div className="flex flex-row min-h-[12.5%] w-full items-end gap-1">
                        <div className="h-full grow bg-[#313131] border-[#6D6D6D] border-1 rounded-sm truncate p-3 flex flex-col items-center justify-end text-white">
                            <h1 className="text-4xl overflow-hidden w-fit h-fit">{currentProject.name}</h1>
                            <h3 className="text-md overflow-hidden w-fit h-fit opacity-45">{currentProject.description}</h3>
                        </div>
                        <div className="w-[15%] max-w-[100px] bg-[#313131] border-[#6D6D6D] border-1 rounded-sm h-full text-white p-1 flex flex-col">
                            {Object.keys(currentProject.links).map((l) => <LinkIcon key={l} type={l} src={currentProject.links[l]}/>)}
                        </div>
                    </div>
                    <div className="grow flex flex-row flex-wrap xl:flex-nowrap justify-between gap-1">
                        <div className="flex flex-col w-[100%] xl:flex-[0_0_55%] h-full gap-1">
                            <div className={`max-w-[100%] max-h-[60%] h-[60%] w-[100%] rounded-sm border-1 border-[#6D6D6D] bg-cover bg-top-left`} style={{ backgroundImage: `url(/${currentProject.cover1})`}}/>
                            <div className="grow bg-[#313131] border-[#6D6D6D] border-1 rounded-sm text-[1.25em] text-white p-3 overflow-hidden">
                                {currentProject.long1 || "Info soon!"}
                            </div>
                        </div>
                        <div className="flex flex-col-reverse xl:flex-col w-[100%] xl:grow h-full gap-1">
                            <div className="grow bg-[#313131] border-[#6D6D6D] border-1 rounded-sm text-xl text-white p-3 overflow-hidden">
                                {currentProject.long2 || "Info soon!"}
                            </div>
                            <div className={`max-w-[100%] max-h-[45%] h-[45%] w-[100%] rounded-sm border-1 border-[#6D6D6D] bg-cover bg-top`} style={{ backgroundImage: `url(/${currentProject.cover2})`}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[95%] min-h-[85vh] bg-[#2A2A2A] flex sm:hidden flex-col items-center justify-center gap-10 py-5 mb-2 text-white">
                {/* <h1 className={"text-6xl " + anton.className}>
                    PROJECTS
                </h1> */}
                <div className="flex flex-row w-full min-h-[30vh] justify-center items-center flex-wrap gap-5">
                    {PROJECTS.map((p, i) => {
                        return <ProjectCard
                                    key={i}
                                    title={p.name}
                                    cover={p.cover1}
                                    link={p.links.github}
                                    desc={p.short}
                                />
                    })}
                </div>
            </div>
        </div>
    )
}
