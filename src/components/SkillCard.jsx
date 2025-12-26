import React from 'react'
import { motion } from "framer-motion";

export const SkillCard = ({language,image}) => {
    return (
        <motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>


        <div className='bg-[#3D5A80] h-60 w-40 sm:h-70 sm:w-70 mt-5 rounded-2xl flex items-center flex-col justify-center hover:bg-amber-400 '>
                <img className='size-35 rounded-lg ' src={image} alt="" />
                <h5 className='text-2xl mt-5'>{language}</h5>
            </div>
            </motion.div>
    )
}
