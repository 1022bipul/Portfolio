import React, { useState } from 'react'
import { Link ,Element} from 'react-scroll';
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import myImg from "../public/b.jpg";

function Header() {

    const [menu ,setMenu]=useState(false)

  
    return (
        <>
        <div className="bg-[#293241] sticky top-0 z-50 flex justify-between items-center h-15">
       <div className='ml-5 text-lg flex gap-2 w-2/5'>
       <div className='sm:size-13 size-12 rounded-full   bg-gray-50'><img  className="object-contain rounded-full " src={myImg} alt="B" /></div>
       <div>
        <h1>Bipul </h1>
       <h3 className='text-sm'>Web Developer</h3>
       </div>
       </div>
       <div onClick={()=>setMenu(!menu)} className='block sm:hidden text-3xl pr-4'>{menu ?<RxCross2 />: <MdOutlineMenu/>}</div>
       <div className='hidden sm:block'>
       <div className='h-full flex justify-center items-center pr-5 ' >
        <ul className='flex space-x-10 text-2xl'>
           <Link to="home" smooth={true} duration={500} className='hover:text-[#98C1D9] active:text-[#3D5A80]'>Home</Link>  
           <Link id='about' to="about"  smooth={true} duration={500} className='hover:text-[#98C1D9] active:text-[#3D5A80]'>About</Link>  
           <Link id='projects' to="projects"  smooth={true} duration={500} className='hover:text-[#98C1D9] active:text-[#3D5A80]'>Projects</Link>  
           <Link id='skills' to="skills"  smooth={true} duration={500}   spy={true}
  activeClass="active" className='hover:text-[#98C1D9] active:text-[#3D5A80]'>Skills</Link>  
           <Link id='experiance' to="experiance"  smooth={true} duration={500} className='hover:text-[#98C1D9] active:text-[#3D5A80]'>Experiance</Link>  
           {/* <Link className='hover:text-[#98C1D9] active:text-[#3D5A80]'>Resume</Link>   */}
           <Link id='contactme' to="contactme"  smooth={true} duration={500} className='hover:text-[#98C1D9] active:text-[#3D5A80]'>contacts</Link>  
        </ul>
       </div>
        {/* // mobile menu */}
      
       
       </div>
        {menu  && <div className='block sm:hidden absolute top-16 bg-gray-600 rounded p-2 right-9'>
        <div className='h-full flex justify-center items-center pr-5 ' >
        <ul className=' flex flex-col  space-y-1 text-xl'>

           <Link className='hover:text-[#98C1D9] active:text-[#3D5A80] '>Home</Link>  
           <Link className='hover:text-[#98C1D9] active:text-[#3D5A80]'>About</Link>  
           <Link className='hover:text-[#98C1D9] active:text-[#3D5A80]'>Projects</Link>  
           <Link className='hover:text-[#98C1D9] active:text-[#3D5A80]'>Skills</Link>  
           <Link className='hover:text-[#98C1D9] active:text-[#3D5A80]'>Resume</Link>  
           <Link className='hover:text-[#98C1D9] active:text-[#3D5A80]'>contacts</Link>  
        </ul>
       </div>
        </div>}
       
    </div>
     
        </>
    )
}

export default Header