import React from "react";
import Chart from "../charts/index";
import { Tween } from "react-gsap";
import { Power4 } from "gsap";
import { useSelector } from "react-redux";

const Model = () => {
  const title = "Executive Summary";
  const content = [
    `Inflation in Japan will likely recede over the next year or so but could stage a dramatic rebound later this decade. This could lead to much higher Japanese bond yields than what investors are currently anticipating.`,
    `Decades of low rates in Japan created a centrifugal force of funds flowing from Japan to the rest of the world. Higher JGB yields could trigger the opposite force.`,
    `Japanese savers today own a staggering $6.5 trillion of foreign assets. This means that once the market realizes that JGB yields are set to structurally rise (something that has not happened in more than three decades), then this could kick up a storm in global markets. • The risk is that the reversal in capital flows could be disruptive because the accumulation of these foreign assets took place over decades, but their sale could be concentrated over a short period. • Strategic investors should remain short JGBs and long the yen to profit from the BOJ’s coming tectonic pivot. • With Japan being the largest foreign holder of US long-term securities, US Treasury yields could rise as Japan repatriates capital back home, with potentially negative knock-on effects on US stocks too.`,
    ,
    `The risk is that the reversal in capital flows could be disruptive because the
 accumulation of these foreign assets took place over decades, but their sale
 could be concentrated over a short period.`,
    `• Strategic investors should remain short JGBs and long the yen to profit from the
 BOJ’s coming tectonic pivot.`,
    `With Japan being the largest foreign holder of US long-term securities, US
 Treasury yields could rise as Japan repatriates capital back home, with
 potentially negative knock-on effects on US stocks too. `,
  ];
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
