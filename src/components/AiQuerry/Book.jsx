import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HTMLFlipBook from "react-pageflip";

const Page = ({ sizes, children }) => {
  return (
    <div
      className="bg-[#fff]"
      style={{
        width: `${sizes.x / 2}px`,
        height: `${sizes.y}px`,
      }}
    >
      {children}
    </div>
  );
};

const FlipBook = ({ files }) => {
  const [loading, setLoading] = useState(false);
  const filesId = useSelector((state) => state.ai.filesId);
  console.log(files[0], "pease");
  const ref = useRef();
  const [sizes, setSizes] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (sizes.x === 0) {
      const check = ref.current.getBoundingClientRect();
      console.log(check);
      setSizes({
        x: check.width,
        y: check.height,
      });
    }
  });
  return (
    <div className="w-[100%] h-[100vh] px-[100px] py-[70px]">
      {files.length !== 0 && filesId ? (
        <div
          className="w-[100%] h-[100%] flex items-center justify-end"
          ref={ref}
        >
          <HTMLFlipBook
            width={sizes.x / 2}
            height={sizes.y}
            className="flex"
            showCover={true}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((item, i) => {
              return (
                <div key={i}>
                  <div
                    style={{
                      width: `${sizes.x / 2}px`,
                      height: `${sizes.y}px`,
                      display: "flex !important",
                    }}
                    className="bg-[#fff] flex items-center justify-center"
                  >
                    <span className="fckin text-[20px] font-bold">
                      Page-{i + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </HTMLFlipBook>
        </div>
      ) : (
        <div
          ref={ref}
          className="w-[100%] h-[100%]  backdrop-blur-[5px] bg-[#ffffff60] border-[#fff] rounded-[5px] flex items-center justify-center "
        >
          <p className="text-[30px] font-bold fckin text-[#fff] capitalize tracking-sm">
            Upload a PDF file Please
          </p>
        </div>
      )}
    </div>
  );
};

export default FlipBook;
