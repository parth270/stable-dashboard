import React, { useState } from "react";

const DropDown = ({ change, curr }) => {
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);
  const data = [
    {
      title: "Image",
    },
    {
      title: "Video",
    },
  ];

  React.useEffect(() => {
    const onPointerdown = () => {
      if (!hover) {
        setClicked(false);
      }
    };
    document.addEventListener("pointerdown", onPointerdown, false);
    return () => {
      document.removeEventListener("pointerdown", onPointerdown, false);
    };
  });

  return (
    <div
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        setClicked(true);
      }}
      className="w-[200px] px-[15px] h-[45px] flex items-center tracking-wide cursor-pointer justify-center fckin bg-[#444] mt-[10px] rounded-sm relative font-medium text-[#fff] "
    >
      {data[curr].title.substring(0, 12)}
      {data[curr].title.length > 11 && "..."}
      {clicked && (
        <div className="absolute w-[100%] py-[5px] top-[48px] px-[10px] min-h-[10px] bg-[#555] rounded-sm">
          {data?.map((item, i) => {
            return (
              <div
                style={{
                  backgroundColor: curr === i ? "#222" : "",
                }}
                onClick={() => {
                  change(i);
                  setTimeout(() => {
                    setClicked(false);
                  }, 10);
                }}
                className="w-[100%] rounded-sm cursor-pointer h-[28px] my-[2px]  overflow-hidden  justify-center text-[12px] flex items-center font-medium"
              >
                <span className="font-bold tracking-wide inline-block shrink-0">
                  {item.title.substring(0, 12)}
                  {item.title.length > 11 && "..."}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
