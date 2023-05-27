import React, { Suspense, useEffect, useRef, useState } from "react";
import Close from "../close";

const VideoDrivenContainer = () => {
  const videoEl = useRef();
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  const [play, setPlay] = useState(true);
  
  return (
    <div className="w-[100%] h-[100vh] p-[40px] relative overflow-hidden justify-center flex-col items-center">
      <Close />
      <Suspense fallback={null}>
        <video
          className="w-[100%] h-[100%] cursor-pointer "
          autoPlay
          controls
          style={{
            zIndex: 1000,
          }}
          playsInline
          onClick={() => {
            if (!play) {
              videoEl.current.play();
              setPlay(true);
            } else {
              videoEl.current.pause();
              setPlay(false);
            }
          }}
          loop
          src={"/bgWeb.mp4"}
          ref={videoEl}
        ></video>
      </Suspense>
    </div>
  );
};

export default VideoDrivenContainer;
