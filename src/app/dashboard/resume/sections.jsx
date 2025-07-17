
export default function SectionHeader({section}){
    return (
        <div className="w-full flex flex-row items-baseline py-1">
            <p className="text-3xl whitespace-nowrap font-bold text-blue-400">{section.slice(0,3)}</p>
            <p className="text-3xl whitespace-nowrap mr-4 font-bold">{section.slice(3)}</p>
            <div className="grow border-b-1 border-b-black"></div>
        </div>
    )
}

export function SkillsSection({data}){

    return (
        <div className="flex flex-col w-full">
            <SectionHeader section="Skills"/>
            {Object.keys(data).map(s => {
                return (
                    <div className="flex flex-row" key={s}>
                        <p className="font-bold mr-2">{s}</p>
                        <p className="">{data[s].join(', ')}</p>
                    </div>
                )
            })}
        </div>
    )
}

export function SummarySection({data}){
    return (
        <div className="w-full flex flex-col">
            <SectionHeader section={"Summary"}/>
            {data}
        </div>
    )
}

export function ProjectsSection({data}){
    return (
        <div className="flex flex-col w-full">
            <SectionHeader section="Projects"/>
            {Object.keys(data).map((p) => {
                return (
                    <p key={p}>
                        <span className="text-lg font-bold inline mr-1">{p}</span>
                        {data[p]}
                    </p>
                )
            })}
        </div>
    )
}

export function ExperienceSection({data}){

    return (
        <div className="flex flex-col w-full">
            <SectionHeader section="Experience"/>
            {Object.keys(data).map((d) => {

                const work = data[d];

                return (
                    <div className="w-full flex flex-col" key={d}>
                    <div className="w-full flex flex-row justify-between items-baseline">
                        <div className="flex flex-row items-baseline gap-2">
                            <p className="text-lg font-bold">{d} </p>
                            <p className="text-md">{work.title}</p>
                        </div>
                        <p className="italic opacity-90">{work.from} - {work.to ?? "present"}</p>
                    </div>
                    <ul className="list-disc pl-4">
                        {work.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                    </div>
                )
            })}
        </div>
    )
}

export function EducationSection({data}){

    return (
        <div className="flex flex-col w-full">
            <SectionHeader section="Education"/>
            {Object.keys(data).map((d) => {

                const school = data[d];

                return (
                    <div className="w-full flex flex-col" key={d}>
                        <div className="w-full flex flex-row justify-between items-baseline">
                            <div className="flex flex-row items-baseline gap-2">
                                <p className="text-lg font-bold">{d} </p>
                                <p className="text-md">{school.what}</p>
                            </div>
                            <p className="italic opacity-90">{school.from} - {school.to}</p>
                        </div>
                        <ul className="list-disc pl-4">
                            {school.points.map((p) => <li key={p}>{p}</li>)}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
