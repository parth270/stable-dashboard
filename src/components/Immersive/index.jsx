import React, { Suspense, useEffect, useRef, useState } from "react";
import Close from "../close";
import Loader from "../../utils/loader";

const Vid = React.lazy(() => import("./vid"));

const Video = ({ src, route, extraRoute }) => {
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
          Webflow Link
        </a>
      )}
    </div>
  );
};

const ImmersiveContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex-col items-center">
        <Close />
        <h1 className="text-center text-[#fff] text-[28px] mt-[50px]  font-semibold">
          Immersive Experience
        </h1>
        <div className="w-[100%] h-[270px] mt-[40px] flex items-center justify-center">
          <Video
            src="/harvard.mp4"
            route="https://threejs-template-blush.vercel.app/"
            extraRoute="https://harvardbusinessschool.webflow.io/"
          />
          <Video
            src="/hfs.mp4"
            route="https://hfs-meme.vercel.app/"
            extraRoute="https://hfs-publishing.webflow.io/"
          />
          <Video
            src="/bca.mp4"
            route="https://euromoney-demo-ir7q.vercel.app/"
          />
        </div>
        <div className="w-[100%] h-[270px] flex items-center justify-center">
          <Video src="/epg.mp4" route="https://epg-report.web.app/" />
          <Video src="/kubota.mp4" route="https://www.kubota.com/futurecube/" />
        </div>
      </div>
    </>
  );
};

export default ImmersiveContainer;
