import React, { Suspense, useEffect, useRef, useState } from "react";

const Video = ({ src, route }) => {
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
    <a href={route} target="_blank">
      <Suspense fallback={null}>
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
      </Suspense>
    </a>
  );
};

export default Video;
