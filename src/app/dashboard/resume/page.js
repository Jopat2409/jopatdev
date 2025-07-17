import ResumeData from "@/data/resume.json"
import ResumeHeader from "./header";
import { EducationSection, ExperienceSection, ProjectsSection, SkillsSection, SummarySection } from "./sections";


export default function Resume({}){
    return (
        <div className="w-full px-10 py-3 flex flex-col items-center leading-5.5">
            <ResumeHeader contacts={ResumeData["Contacts"]}/>
            <SummarySection data={ResumeData["Summary"]}/>
            <EducationSection data={ResumeData["Education"]}/>
            <ExperienceSection data={ResumeData["Experience"]}/>
            <ProjectsSection data={ResumeData["Projects"]}/>
            <SkillsSection data={ResumeData["Skills"]}/>
        </div>
    )

}
