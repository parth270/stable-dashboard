import React, { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";

const Aud = () => {
  const ref = useRef();
  const [src, setSrc] = useState("/eng.mp3");
  const [srcId, setSrcId] = useState(0);
  const opt = ["eng", "jap", "portugese"];
  React.useEffect(() => {
    console.log(ref.current);
    if (ref.current) {
      const thatDiv = ref.current.container.current;
      const first = thatDiv.children[1];
      console.log(first);
      first.className = "flex w-[100%]";
      first.children[0].className =
        "font-medium text-[12px] text-[#000] flex w-[160px] justify-between absolute  items-center";
      first.children[1].className =
        "flex w-[160px] justify-center absolute px-[50px]";
      first.children[1].children[0].style.display = "none";
      first.children[1].children[2].style.display = "none";
      first.children[1].children[1].className = "scale-150";
      first.children[1].children[1].children[0].className = "svg-white";
      first.children[1].children[1].children[1].className = "svg-white";
      first.children[1].children[1].children[2].className = "svg-white";
    }
  });

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
    <div
      className="w-[340px] flex items-center justify-between absolute top-[20px] right-[20px]"
      style={{
        zIndex: 10000000000,
      }}
    >
      <AudioPlayer
        ref={ref}
        className="aud-check"
        src={src}
        listenInterval={10}
        onPlay={(e) => console.log("onPlay")}
      />
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
        className="w-[140px] cursor-pointer relative h-[34px] relative translate-y-[8px] rounded-sm bg-[#00000017] flex items-center justify-center font-medium text-[14px] text-[#fff]  right-0 "
      >
        <p className="cursor-pointer uppercase translate-x-[-3px] text-[14px] tracking-wide">
          {opt[srcId]}
        </p>
        <img
          src="/down.svg"
          className={` ${
            clicked ? "rotate-180" : ""
          } absolute right-[13px] w-[10px] translate-y-[1px]`}
          alt=""
        />
        {clicked && (
          <div
            className="w-[100%] min-h-[34px] py-[5px] px-[5px] bg-[#222] rounded-sm absolute top-[38px]"
            style={{
              zIndex: 1000000000000,
            }}
          >
            <div
              onClick={() => {
                setSrcId(0);
                setSrc("/eng.mp3");
              }}
              className="w-[100%] h-[34px] bg-[#333] cursor-pointer uppercase text-[12px] tracking-wide rounded-sm mb-[4px] flex items-center justify-center "
            >
              eng
            </div>
            <div
              onClick={() => {
                setSrcId(1);
                setSrc("/jap.mp3");
              }}
              className="w-[100%] h-[34px] bg-[#333] cursor-pointer uppercase text-[12px] tracking-wide rounded-sm mb-[4px] flex items-center justify-center "
            >
              jap
            </div>
            <div
              onClick={() => {
                setSrcId(2);
                setSrc("/eng1.mp3");
              }}
              className="w-[100%] h-[34px] bg-[#333] cursor-pointer uppercase text-[12px] tracking-wide rounded-sm flex items-center justify-center "
            >
              portugese
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Aud;
