import React from "react";

const Vid = ({src}) => {
  return (
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
    ></video>
  );
};

export default Vid;
