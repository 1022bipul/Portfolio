import { SkillCard } from './SkillCard'
import { Element } from 'react-scroll'
// import html from "../src/public/html.jpg"
export const Skills = () => {
    return (
         <Element name="skills">
        <div className='w-full text-center my-10 '>
            <h1 className='text-5xl font-bold text-amber-600 bg-[#3D5A80] p-3'>My Skills</h1>
            <div className='mt-5 ml-15 sm:ml-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4'>
            <SkillCard language={"html"} image={ "../src/public/html.jpg"}/>
            <SkillCard language={"css"} image={"../src/public/css.jpg"}/>
            <SkillCard language={"Tailwind CSS"} image={"../src/public/tailwind.jpg"}/>
            <SkillCard language={"JavaScript"} image={"../src/public/js.jpg"}/>
            <SkillCard language={"React"} image={"../src/public/react.jpg"}/>
            <SkillCard language={"Node Js"} image={"../src/public/node.jpg"}/>
            <SkillCard language={"MongoDB"} image={"../src/public/mongo.jpg"}/>
            <SkillCard language={"ExpressJs"} image={"../src/public/ex.jpg"}/>
            <SkillCard language={"python"} image={"../src/public/python.jpg"}/>
            <SkillCard language={"Git"} image={"../src/public/git.jpg"}/>
            <SkillCard language={"Github"} image={"../src/public/github.jpg"}/>
            
            </div>
        </div>
        </Element>
    )
 }
