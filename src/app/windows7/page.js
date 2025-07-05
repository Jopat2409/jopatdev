import { shownAt } from "@/helpers/responsive";

export default function Windows7(){

    return (
        <div className="flex w-[100vw] h-[100vh] items-center justify-center">
            <button>Hi this does regular</button>
            <button className={shownAt({breakpoint: "sm"})}>Hi this does sm</button>
            <button className={shownAt({breakpoint: "md"})}>Hi this does md</button>
            <button className={shownAt({breakpoint: "lg"})}>Hi this does lg</button>
            <button className={shownAt({breakpoint: "xl"})}>Hi this does xl</button>
            <button className={shownAt({breakpoint: "2xl"})}>Hi this does 2xl</button>
        </div>
    )

}
