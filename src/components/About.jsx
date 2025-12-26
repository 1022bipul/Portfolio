import React from "react";
import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element name="about">
    <div>
      <div className="m-5">
        <h1 className="text-4xl font-bold ">About</h1>
        <div className="flex">
          <span className="mt-6 text-[#EE6C4D]">
            <hr className="w-10 " />
          </span>
          <p className=" flex flex-wrap ml-1 my-2 text-xl ">
            Hi, I’m Bipul, a BSc Computer Science & Data Analytics student at
            IIT Patna (3rd Semester). I’m a passionate tech enthusiast who loves
            exploring how real-world systems work and turning ideas into
            practical digital solutions
          </p>
        </div>
      </div>
    </div>
    </Element>
  );
};
