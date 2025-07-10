import { Anton } from "next/font/google"
import ContactCard from "./contactcard"

const anton = Anton({subsets: ['latin'], weight: '400'})

export default function About(){

    return (
        <div className="text-white mt-[10vh] w-full min-h-[90vh] flex flex-col gap-10 items-center justify-center">
            <div className="w-[95%] min-h-[85vh] bg-[#2A2A2A] flex flex-col items-center justify-center gap-10 py-5">
                <h1 className={"text-6xl hidden sm:block" + anton.className}>
                    CONTACT ME
                </h1>
                <div className="flex flex-row w-full min-h-[30vh] justify-center items-center flex-wrap gap-10">
                    <ContactCard
                        icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png"
                        href="https://uk.linkedin.com/in/jopat2409"
                        description={"See my activity and message me through my Linkedin page"}
                        buttonText={"Contact on Linkedin"}
                    />
                    <ContactCard
                        icon="https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png"
                        href="https://github.com/jopat2409"
                        description="View the code for this website and all my projects on my GitHub page"
                        buttonText="View my GitHub"
                    />
                    <ContactCard
                        icon="https://static.vecteezy.com/system/resources/previews/022/484/516/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png"
                        href="mailto:joantpat@gmail.com"
                        description="Contact me about anything by sending me a message at my Gmail account"
                        buttonText="Send me an email"
                    />
                </div>
            </div>
        </div>
    )
}
