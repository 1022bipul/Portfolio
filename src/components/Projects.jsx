import React from "react";
import { Element } from "react-scroll";

export const Projects = () => {
  return (
    <Element name="projects">
    <div className="bg-[#3D5A80] w-full py-5">
      <h1 className="text-4xl font-semibold px-5 text-amber-600">Projects</h1>
      {/* <hr className='rotate-90 w-20'/> */}
      <div className="py-5 px-20 ">
        {/* <span className="border-1 border-r-0 p-0.5 rounded-r-lg"> 2022 </span> */}
        <div>
          <h1 className="text-3xl flex items-center "><div className="size-3 mx-10 p-2 shadow-amber-300   bg-amber-300 rounded-full"></div>Social Media Web App (MERN Stack)</h1>

          <p className="text-xl ml-30 mt-5">
            Built a full-stack app with user auth, post creation, comments,
            likes, and responsive UI Technologies: React, Node.js, Express.js,
            MongoDB, Tailwind
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl flex items-center "><div className="size-3 mx-10 p-2 shadow-amber-300   bg-amber-300 rounded-full"></div>Video Upload Portal</h1>
          <p className="text-xl ml-30 mt-5">
            Developed a platform for uploading and playing videos using
            Cloudinary API Implemented secure file handling with Multer and
            responsive frontend
          </p>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl flex items-center "><div className="size-3 mx-10 p-2 shadow-amber-300   bg-amber-300 rounded-full"></div>Weather App</h1>
          <p className="text-xl ml-30 mt-5">
            Developed a platform for uploading and playing videos using
            Cloudinary API Implemented secure file handling with Multer and
            responsive frontend
          </p>
        </div>
      </div>
    </div>
    </Element>
  );
};
