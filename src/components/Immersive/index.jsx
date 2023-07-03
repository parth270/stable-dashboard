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
        <Suspense fallback={<Loader />}>
          <Vid1 src={src} />
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

const ImmersiveContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-y-auto flex-col items-center">
        <Close />
        <h1 className="text-center text-[#fff] text-[28px] mt-[50px]  font-semibold">
          Immersive Experience
        </h1>
        <div className="w-[100%] h-[270px] mt-[40px] flex items-center justify-center">
          <Video
            src="/harvard.mp4"
            route="https://threejs-template-blush.vercel.app/"
            extraRoute="https://harvardbusinessschool.webflow.io/"
            extraName={"Harvard Portal"}
          />
          <Video
            src="/hfs.mp4"
            route="https://hfs-meme.vercel.app/"
            extraRoute="https://hfs-publishing.webflow.io/"
            extraName={"HFS Portal"}
          />
          <Video
            src="/bca.mp4"
            route="https://euromoney-demo-ir7q.vercel.app/"
          />
        </div>
        <div className="w-[100%] h-[270px] flex items-center justify-center">
          <Video src="/epg.mp4" route="https://epg-report.web.app/" />
          <Video src="/kubota.mp4" route="https://www.kubota.com/futurecube/" />
          <Video
            src="/dilenian.mp4"
            route="https://dilenian-demo.vercel.app/"
          />
        </div>
        <div className="w-[100%] h-[270px] flex items-center justify-center">
          <Video1
            src="https://connector.eagle3dstreaming.com/v5/nic/WhatsOnDubai/Nirvana"
            route="https://epg-report.web.app/"
          />
          <Video1
            src="https://connector.eagle3dstreaming.com/v5/nic/Nirvana/Nirvana"
            route="https://epg-report.web.app/"
          />
          <div className="w-[450px] flex items-center shrink-0 h-[270px]" >
            <a
              href={"https://9-yards-dashboard.vercel.app/"}
              className="text-[#fff] hover:underline left-0 h-[20px] flex items-center font-medium  ml-[10px]"
              target="_blank"
            >
              9-yards
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImmersiveContainer;
