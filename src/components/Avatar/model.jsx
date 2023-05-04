import React from "react";
import Chart from "../charts/index";
import { Tween } from "react-gsap";
import { Power4 } from "gsap";
import { useSelector } from "react-redux";

const Model = ({title,content}) => {
  return (
    <>
      <div
        className="w-[100%] flex justify-center  absolute top-[0] left-0 h-[100vh]"
        style={{ zIndex: 1009 }}
      >
        <Tween
          from={{
            clipPath: "inset(0px 670px 1px 680px)",
          }}
          to={{
            clipPath: false
              ? "inset(0px 670px 1px 680px)"
              : "inset(0px 0vw 1px 0px)",
          }}
          ease={Power4.easeInOut}
          duration={0.7}
        >
          <div className="w-[100%] h-[100%] pl-[100px] flex justify-between items-center ">
            <div className="w-[55%] py-[25px] rounded-3xl h-[550px] backdrop-blur-xl bg-[#00000060] flex flex-col justify-center px-[40px]">
              <h1 className="text-[#fff]  font-medium text-[35px] mb-[10px]">
                {title}:
              </h1>
              <div className="w-[100%] overflow-y-auto scroll-bar-cool h-[400px] pr-[50px]">
                {content.map((item, i) => {
                  return (
                    <p
                      key={i}
                      className="text-[#fff] text-[18px] mt-[10px] font-medium"
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>
            {/* <div className="w-[40%] h-[400px] ">
              <Chart />
            </div> */}
          </div>
        </Tween>
      </div>
    </>
  );
};

export default Model;
