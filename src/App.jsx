import { Outlet } from "react-router-dom"
import { About } from "./components/About"
import { ContactMe } from "./components/ContactMe"
import { Experiance } from "./components/Experiance"
import Header from "./components/Header"
import { Home } from "./components/Home"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import "./index.css"

function App() {


 
  return (
    <>
    <div className=" h-full w-full p-1 sm:pb-10">
   
    <div className="bg-[#293241] sm:mx-10 sm:mt-10 py-5 rounded-lg shadow-2xl shadow-black sha">
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experiance/>
    <ContactMe/>
    {/* <Outlet/> */}
    <div className="text-4xl flex items-center font-semibold text-amber-600 justify-center p-10">
      Thanks For Scrolling!
    </div>
    </div>
    </div>
   
    
    
    </>
  )
}

export default App
