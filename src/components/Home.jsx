import React from "react";
import myImg from "../public/bipul.png";
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";

export const Home = () => {
  return (
    <>
    <Element name="home">
      <div className="pt-5 sm:pt-10 flex flex-col-reverse sm:flex-row  justify-between">
        <div className="p-2 sm:pl-25 mt-5 sm:mt-0 font-semibold  w-full flex flex-col justify-center text-3xl sm:text-7xl sm:items-start items-center sm:text-start text-center gap-3 ">
          <h1 className="">
            I'm
            <span className="text-[#EE6C4D] text-3xl sm:text-7xl"> Bipul</span>
          </h1>
          <p>
            I'm a full stack web
             
            <span className="text-[#EE6C4D] block">
              <Typewriter
                words={["Developer", "Programmer", "Coder"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <button className="border-2 rounded-md text-2xl p-1.5 mt-4 hover:text-white  text-[#EE6C4D] border-[#EE6C4D]    ">Contact Me</button>
        </div>
        <div className="border sm:border-none  rounded-full  sm:rounded-none flex justify-center overflow-hidden  sm:overflow-visible  size-85 sm:size-full self-center sm:self">
          <img className="sm:size-fit object-cover size-100 -translate-y-15 -translate-x-4" src={myImg} alt="" />
        </div>
      </div>
      <hr className="sm:-translate-y-15"/>
      </Element>
    </>
  );
};
