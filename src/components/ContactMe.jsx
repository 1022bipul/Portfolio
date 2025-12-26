import React from 'react'
import { Element } from 'react-scroll'

export const ContactMe = () => {
    return (
      <Element name='contactme'>
       <div className="bg-[#3D5A80] text-center ">
      <h1 className="text-4xl -translate-y-6 font-semibold text-amber-600">Contact Me</h1>
      <div className="pb-5 px-20 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-20 ">
        <h1 className='text-xl border-2 p-2 rounded-md'><span>Email-</span>bipulraj101@gmail.com</h1>
        {/* <h1 className='text-xl border-2 p-2 rounded-md'><span>Mobile No.- </span>9876543210</h1> */}
      </div>
      </div>
        </Element>
    )
}
