
export default function ProjectCard({title, cover, desc, link}){

    return (
        <div className="h-[50vh] w-[90%] md:w-[30%] bg-[#313131] border-[#6D6D6D] border-1 rounded-sm flex flex-col items-center">
            <img src={cover} className="w-full h-[50%] aspect-square object-cover rounded-t-sm object-top"/>
            <h1 className="text-2xl my-1 ">{title}</h1>
            <p className="text-white w-[90%] text-center text-sm">{desc}</p>
            <a className="bg-[#B33838] opacity-75 w-[95%] min-h-[5vh] text-center rounded-[10px] flex items-center justify-center text-xl mb-2 flex-end mt-auto" href={link} target="_blank">View on GitHub</a>
        </div>
    )
}
