
export default function ResumeHeader({contacts}){
    return (
        <div className="w-full flex flex-col items-center">
            <p className="font-bold text-2xl">Joe Paton</p>
            <div className="flex flex-row gap-2 mb-2">
                {contacts.map((c, i) => {
                    return (
                        <div className="flex flex-row gap-2" key={i}>
                            <p className="after:content-[' \00b7']">{c}</p>
                            {i < contacts.length - 1 && <p>&bull;</p>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
