import React, { Suspense, useEffect, useRef, useState } from "react";
import Close from "../close";
import Loader from "../../utils/loader";

const Vid = React.lazy(() => import("./vidds"));

const Video = ({ src, route, extraRoute }) => {
  return (
    <div className="relative">
      {/* <a href={route} target="_blank"></a> */}
      <Suspense fallback={<Loader />}>
        <Vid src={src} />
      </Suspense>
      {extraRoute && (
        <a
          href={extraRoute}
          className="text-[#fff] absolute bottom-[-25px] hover:underline left-0 h-[20px] flex items-center font-medium  ml-[10px]"
          target="_blank"
        >
          Webflow Link
        </a>
      )}
    </div>
  );
};

const ImmersiveContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-y-auto  ">
        <Close />
        <h1 className="text-center text-[#fff] text-[28px] pt-[50px]  font-semibold">
          Products
        </h1>
        <div className="w-[100%] h-[600px] ">
          <div className="w-[100%] h-[270px] mt-[40px] flex items-center justify-center">
            <Video
              src="https://player.vimeo.com/video/825085390?h=0fd0e9c4c5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              route="https://player.vimeo.com/video/825085390?h=0fd0e9c4c5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            />
            <Video
              src="https://player.vimeo.com/video/818001094?h=a33b3c2513&badge=0&autopause=0&player_id=0&app_id=58479/embed"
              route="https://player.vimeo.com/video/818001094?h=a33b3c2513&badge=0&autopause=0&player_id=0&app_id=58479/embed"
            />
          </div>
          <div className="w-[100%] h-[270px] flex items-center justify-center">
            <Video
              src="https://player.vimeo.com/video/818001028?h=b2e4e0bb4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              route="https://euromoney-demo-ir7q.vercel.app/"
            />
            <Video
              src="https://player.vimeo.com/video/818000952?h=3d65463b57&badge=0&autopause=0&player_id=0&app_id=58479/embed"
              route="https://epg-report.web.app/"
            />
          </div>
        </div>

        <div className="w-[100%] flex flex-col items-center pb-[100px] min-h-[100px] pl-[100px]">
          <h1
            className="text-[#fff] w-[980px] shrink-0  hover:text-[#43d2db] mt-[20px] text-[28px] hover:underline cursor-pointer flex items-center good-font "
            onClick={() => {}}
          >
            <a
              href="https://skyboxes.vercel.app/create"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biblo Creator
            </a>
          </h1>
          <h1
            className="text-[#fff] shrink-0 w-[980px] hover:text-[#43d2db] mt-[20px] text-[28px] hover:underline cursor-pointer flex items-center good-font "
            onClick={() => {}}
          >
            <a
              href="https://biblo.mesmr.io/Mesmr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biblo Platform
            </a>
          </h1>
          <h1
            className="text-[#fff] w-[980px] shrink-0  hover:text-[#43d2db] mt-[20px] text-[28px] hover:underline cursor-pointer flex items-center good-font "
            onClick={() => {}}
          >
            <a
              href="https://burroh.mesmr.io/Burrohaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bandr Platform
            </a>
          </h1>
          <h1
            className="text-[#fff] shrink-0 w-[980px] hover:text-[#43d2db] mt-[20px] text-[28px] hover:underline cursor-pointer flex items-center good-font "
            onClick={() => {}}
          >
            <a
              href="https://staging.willo.inc/VensureHr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Burroh Platform
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default ImmersiveContainer;
