import { IconBrandGithub, IconBrandPython, IconBrandSteam, IconQuestionMark, IconWorld } from "@tabler/icons-react"


function icon(type) {
    switch(type.toLowerCase()){
    case "steam":
        return IconBrandSteam
    case "website":
        return IconWorld
    case "github":
        return IconBrandGithub
    case "pypi":
        return IconBrandPython
    default:
        return IconQuestionMark
    }
}

export default function LinkIcon({type, src}){

    const IconComponent = icon(type);

    return (
        <a className="flex flex-row items-center justify-start mb-1" href={src} target="_blank">
            <IconComponent className="mr-1"/>
            {String(type).charAt(0).toUpperCase() + String(type).slice(1)}
        </a>
    )
}
