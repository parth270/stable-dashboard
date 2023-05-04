import React, { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";

const Aud = () => {
  const ref = useRef();
  const [src, setSrc] = useState("/eng.mp3");
  const [srcId, setSrcId] = useState(0);
  const opt = ["English", "Japanese", "portugese", "swedish"];
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
      className="w-[340px] flex items-center justify-between absolute bottom-[30px] left-[160px]"
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
        className="w-[140px] border-[1px] border-[#000] cursor-pointer relative h-[40px] rounded-3xl relative translate-y-[8px] rounded-sm bg-[#00000017] flex items-center justify-center font-medium text-[14px] text-[#fff]  right-0 "
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
        />
        {clicked && (
          <div
            className="w-[100%] min-h-[34px] py-[5px] px-[5px] bg-[#d55432] rounded-3xl border-[1px] border-[#000]  rounded-sm absolute bottom-[45px]"
            style={{
              zIndex: 1000000000000,
            }}
          >
            <div
              onClick={() => {
                setSrcId(0);
                setSrc("/eng.mp3");
              }}
              className="w-[100%] h-[34px] cursor-pointer text-[#000] capitalize font-medium tracking-wide text-[13px] tracking-wide rounded-sm mb-[4px] flex items-center justify-center "
            >
              {opt[0]}
            </div>
            <div
              onClick={() => {
                setSrcId(1);
                setSrc("/jap.mp3");
              }}
              className="w-[100%] h-[34px] cursor-pointer text-[#000] capitalize font-medium tracking-wide text-[13px] tracking-wide rounded-sm mb-[4px] flex items-center justify-center "
            >
              {opt[1]}
            </div>
            <div
              onClick={() => {
                setSrcId(2);
                setSrc("/portu.mp3");
              }}
              className="w-[100%] h-[34px] cursor-pointer text-[#000] capitalize font-medium tracking-wide text-[13px] tracking-wide rounded-sm flex items-center justify-center "
            >
              {opt[2]}
            </div>
            <div
              onClick={() => {
                setSrcId(2);
                setSrc("/swedish.mp3");
              }}
              className="w-[100%] h-[34px] cursor-pointer text-[#000] capitalize font-medium tracking-wide text-[13px] tracking-wide rounded-sm flex items-center justify-center "
            >
              {opt[3]}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Aud;
