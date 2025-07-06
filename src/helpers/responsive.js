

export function className({df, md="", lg=""}){
    return `${df}` + (md ? ` md:${md}` : "") + (lg ? ` lg:${lg}` : "")
}

export function hiddenAt({className="", breakpoint="md"}){
    return (className ? `${className} ` : "") + `visible ${breakpoint}:invisible`
}

export function shownAt({className="", breakpoint="md"}){
    return (className ? `${className} ` : "") + `hidden ${breakpoint}:!block`
}
