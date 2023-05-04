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

    <div className="w-[100%] h-[100vh] flex flex-col justify-center  relative   ">
      <Left id={0} />
      <Right id={0} />
      {/* <h1 className="fckin font-medium absolute top-[41px] left-[150px] text-[#fff] whitespace-nowrap text-[44px] w-[500px]">
        The Ecosystem of Solutions
      </h1> */}
      <video
        className="w-[100%]  h-[100vh] cursor-pointer object-cover "
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
        src={"/main-man.mp4"}
        ref={videoEl}
      ></video>
    </div>
  );
};

export default Index1;
