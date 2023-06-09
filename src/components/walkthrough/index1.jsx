import React, { useEffect, useRef, useState } from "react";
import Left from "./left";
import Right from "./right";

const Index1 = () => {
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
    // <h1 className="text-center text-[#fff] text-[28px]  font-semibold">
    //   How would you like to experience your report?
    // </h1>

    <div className="w-[100%] h-[100vh] flex flex-col justify-center  relative   px-[10%]">
      <Left id={1} />
      <Right id={1} />
      <h1 className="good-font font-medium absolute top-[41px] left-[150px] text-[#fff] whitespace-nowrap text-[44px] w-[500px]">
        The Ecosystem of Solutions
      </h1>
      <video
        className="w-[100%] mb-[-100px] h-[100vh] cursor-pointer "
        autoPlay
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
        src={"/circle.webm"}
        ref={videoEl}
      ></video>
    </div>
  );
};

export default Index1;
