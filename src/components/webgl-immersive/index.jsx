import React, { Suspense, useEffect, useRef, useState } from "react";
import Close from "../close";
import Loader from "../../utils/loader";

const Vid = React.lazy(() => import("./vid"));
const Vid1 = React.lazy(() => import("./vidds"));

const Video = ({ src, route, extraRoute, extraName }) => {
  return (
    <div className="relative">
      <a href={route} target="_blank">
        <Suspense fallback={<Loader />}>
          <Vid src={src} />
        </Suspense>
      </a>
      {extraRoute && (
        <a
          href={extraRoute}
          className="text-[#fff] absolute bottom-[-25px] hover:underline left-0 h-[20px] flex items-center font-medium  ml-[10px]"
          target="_blank"
        >
          {extraName}
        </a>
      )}
    </div>
  );
};
const Video1 = ({ src, route, extraRoute, extraName }) => {
  return (
    <div className="relative">
      <a href={route} target="_blank">
        {/* <Suspense fallback={<Loader />}>
          <Vid1 src={src} />
        </Suspense> */}
        <img src={src} className="w-[400px] mr-[40px]" alt="" />
      </a>
      {extraRoute && (
        <a
          href={extraRoute}
          className="text-[#fff] absolute bottom-[-25px] hover:underline left-0 h-[20px] flex items-center font-medium  ml-[10px]"
          target="_blank"
        >
          {extraName}
        </a>
      )}
    </div>
  );
};

const ImmersiveContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-y-auto flex-col items-center">
        <Close />
        <h1 className="text-center text-[#fff] text-[28px] mt-[50px]  font-semibold">
          Immersive Experience
        </h1>

        <div className="w-[100%] h-[270px] mt-[100px] flex items-center justify-center">
          <Video1
            src="/tanmia.png"
            // route="https://portal.furioos.com/application/Lqvj5GB8B9HGLeirX"
            route="https://mantia-webgl.vercel.app/"
          />
        </div>
      </div>
    </>
  );
};

export default ImmersiveContainer;
