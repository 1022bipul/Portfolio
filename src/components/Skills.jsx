import React from 'react'
import { SkillCard } from './SkillCard'
import { Element } from 'react-scroll'

export const Skills = () => {
    return (
         <Element name="skills">
        <div className='w-full text-center my-10 '>
            <h1 className='text-5xl font-bold text-amber-600 bg-[#3D5A80] p-3'>My Skills</h1>
            <div className='mt-5 ml-15 sm:ml-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4'>
            <SkillCard language={"html"} image={"../src/assets/html.jpg"}/>
            <SkillCard language={"css"} image={"../src/assets/css.jpg"}/>
            <SkillCard language={"Tailwind CSS"} image={"../src/assets/tailwind.jpg"}/>
            <SkillCard language={"JavaScript"} image={"../src/assets/js.jpg"}/>
            <SkillCard language={"React"} image={"../src/assets/react.jpg"}/>
            <SkillCard language={"Node Js"} image={"../src/assets/node.jpg"}/>
            <SkillCard language={"MongoDB"} image={"../src/assets/mongo.jpg"}/>
            <SkillCard language={"ExpressJs"} image={"../src/assets/ex.jpg"}/>
            <SkillCard language={"python"} image={"../src/assets/python.jpg"}/>
            <SkillCard language={"Git"} image={"../src/assets/git.jpg"}/>
            <SkillCard language={"Github"} image={"../src/assets/github.jpg"}/>
            
            </div>
        </div>
        </Element>
    )
 }
