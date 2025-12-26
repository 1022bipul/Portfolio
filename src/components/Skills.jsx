import { SkillCard } from './SkillCard'
import { Element } from 'react-scroll'
import html from "../public/html.jpg";
import css from "../public/css.jpg";
import tailwind from "../public/tailwind.jpg";
import js from "../public/js.jpg";  
import react from "../public/react.jpg";
import node from "../public/node.jpg";
import mongo from "../public/mongo.jpg";    
import ex from "../public/ex.jpg";
import python from "../public/python.jpg";
import git from "../public/git.jpg";
import github from "../public/github.jpg";

export const Skills = () => {
    return (
         <Element name="skills">
        <div className='w-full text-center my-10 '>
            <h1 className='text-5xl font-bold text-amber-600 bg-[#3D5A80] p-3'>My Skills</h1>
            <div className='mt-5 ml-15 sm:ml-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4'>
            <SkillCard language={"html"} image={html}/>
            <SkillCard language={"css"} image={css}/>
            <SkillCard language={"Tailwind CSS"} image={tailwind}/>
            <SkillCard language={"JavaScript"} image={js}/>
            <SkillCard language={"React"} image={react}/>
            <SkillCard language={"Node Js"} image={node}/>
            <SkillCard language={"MongoDB"} image={mongo}/>
            <SkillCard language={"ExpressJs"} image={ex}/>
            <SkillCard language={"python"} image={python}/>
            <SkillCard language={"Git"} image={git}/>
            <SkillCard language={"Github"} image={github}/>
            
            </div>
        </div>
        </Element>
    )
 }
