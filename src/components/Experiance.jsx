import React from "react";
import { Element } from "react-scroll";

export const Experiance = () => {
  return (
    <Element name="experiance">
    <div className="m-5">
      <h1 className="text-4xl text-amber-600 font-semibold">Experiances</h1>
      <div className="py-5 px-20">
        <h1 className="text-2xl">IITMitra – College Community Web App</h1>
        <p className="text-lg pl-10 pt-5">
          MERN Stack | Live: iitmitra.com Developed and deployed a full-stack
          web app with user auth, post sharing, and video upload. Handled both
          frontend (React, Tailwind) and backend (Node.js, MongoDB) development.
          Deployed frontend on Vercel, backend on Render, integrated custom
          domain. Implemented SPA routing, protected routes, and optimized
          image/video performance.
        </p>
      </div>
    </div>
    </Element>
  );
};
