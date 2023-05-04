import React, { useEffect, useRef, useState } from "react";
import Close from "../close";

const Video = ({ src ,route}) => {
  const videoEl = useRef();
  //   const attemptPlay = () => {
  //     videoEl &&
  //       videoEl.current &&
  //       videoEl.current.play().catch((error) => {
  //         console.error("Error attempting to play", error);
  //       });
  //   };

  //   useEffect(() => {
  //     attemptPlay();
  //     setTimeout(() => {
  //       attemptPlay();
  //       videoEl.current.play();
  //     }, 1000);
  //   }, []);
  const [play, setPlay] = useState(true);
  console.log(play);
  return (
    <a href={route} target="_blank" >
      <video
        className="w-[400px] mr-[40px]  cursor-pointer cursor-pointer "
        autoPlay
        style={{
          zIndex: 99999999,
        }}
        playsInline
        //   onMouseOver={() => {
        //     // if (!play) {
        //     videoEl.current.play();
        //     setPlay(true);
        //     // } else {

        //     // }
        //   }}
        //   onMouseLeave={() => {
        //     videoEl.current.pause();
        //     setPlay(false);
        //   }}
        loop
        src={src}
        muted={true}
        ref={videoEl}
      ></video>
    </a>
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
          />
          <Video src="/hfs.mp4" route="https://hfs-meme.vercel.app/" />
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
