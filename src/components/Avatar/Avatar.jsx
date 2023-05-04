import React, { useEffect, useRef, useState } from "react";

const Avatars = () => {
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
  const [src, setSrc] = useState("/avatar-eng.webm");
  const [srcId, setSrcId] = useState(0);
  const opt = ["Jane", "Japanese", "portugese", "swedish"];
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);
  React.useEffect(() => {
    const onPointerDown = () => {
      if (!hover) {
        setClicked(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, false);
    };
  });

  return (
    <>
      <video
        className="w-[400px] absolute bottom-0 cursor-pointer right-0 cursor-pointer "
        autoPlay
        style={{
          zIndex: 99999999,
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
        src={src}
        ref={videoEl}
      ></video>
      <div
        onClick={() => {
          setClicked(true);
        }}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{
          zIndex: 9999999999999,
        }}
        className="w-[140px] absolute bottom-[50px] right-[320px] border-[1px] border-[#000] cursor-pointer  h-[40px] rounded-3xl  translate-y-[8px] bg-[#00000017] flex items-center justify-center font-medium text-[14px] text-[#fff]  right-0 "
      >
        <p className="cursor-pointer font-medium capitalize translate-x-[-3px] text-[18px] text-[#000] font-medium tracking-wide">
          {opt[srcId]}
        </p>
        <img
          src="/down (2).svg"
          className={` ${
            !clicked ? "rotate-180" : ""
          } absolute right-[13px] w-[10px] translate-y-[1px]`}
          alt=""
          style={{}}
        />
        {clicked && (
          <div
            className="w-[100%] min-h-[34px] py-[5px] px-[5px] bg-[#936083] rounded-3xl border-[1px] border-[#000]  absolute bottom-[45px]"
            style={{
              zIndex: 1000000000000,
            }}
          >
            <div
              onClick={() => {
                setSrcId(0);
                setSrc("/avatar-eng.webm");
              }}
              className="w-[100%] h-[34px] cursor-pointer text-[#000] capitalize font-medium tracking-wide text-[13px] tracking-wide rounded-sm mb-[4px] flex items-center justify-center "
            >
              {opt[0]}
            </div>
            <div
              onClick={() => {
                setSrcId(1);
                setSrc("/avatar-japaense.webm");
              }}
              className="w-[100%] h-[34px] cursor-pointer text-[#000] capitalize font-medium tracking-wide text-[13px] tracking-wide rounded-sm mb-[4px] flex items-center justify-center "
            >
              {opt[1]}
            </div>
            <div
              onClick={() => {
                setSrcId(2);
                setSrc("/avatar-portu.webm");
              }}
              className="w-[100%] h-[34px] cursor-pointer text-[#000] capitalize font-medium tracking-wide text-[13px] tracking-wide rounded-sm flex items-center justify-center "
            >
              {opt[2]}
            </div>
            <div
              onClick={() => {
                setSrcId(3);
                setSrc("/avatar-swedish.webm");
              }}
              className="w-[100%] h-[34px] cursor-pointer text-[#000] capitalize font-medium tracking-wide text-[13px] tracking-wide rounded-sm flex items-center justify-center "
            >
              {opt[3]}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Avatars;
