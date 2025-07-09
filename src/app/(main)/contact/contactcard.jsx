
export default function ContactCard({icon, href, description, buttonText}){

    return (
        <div className="h-[95%] w-[30%] bg-[#313131] border-[#6D6D6D] border-1 rounded-sm flex flex-col items-center justify-between px-3 py-5 hover:h-[100%] hover:w-[35%] min-w-[230px]">
            <img src={icon} className="w-[15%] aspect-square object-fill"/>
            <p className="text-white w-[75%] text-center text-xl">{description}</p>
            <a className="bg-[#B33838] opacity-75 w-[95%] h-[25%] text-center rounded-[10px] flex items-center justify-center text-xl" href={href} target="_blank">{buttonText}</a>
        </div>
    )
}
